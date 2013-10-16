<?php
// Error reporting alleen aanzetten in dev mode 1 = aan, 0 = uit
ini_set('display_errors', 0);
error_reporting(E_ALL);

if($_SERVER['REQUEST_METHOD'] == 'POST') {

	require_once('config/db_config.php');

	$userErrors = Array();
				
	$mysqli = new mysqli($host, $user, $passwd, $database);
	if ($mysqli->connect_errno) {
	    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
	}
	else {

		if (!isset($_POST['naam']) || ($_POST['naam'] == '')) {
		// Naam is niet ingevuld
		$userErrors[] = 'U heeft geen naam ingevuld';
		}
		if (!isset($_POST['maand']) || ($_POST['maand'] == '') || ($_POST['maand'] == ' - Maand - ')) {
			// Er is niks geselecteerd
			$userErrors[] = 'U heeft geen maand gekozen';
		}
		if (!isset($_POST['dag']) || ($_POST['dag'] == '') || (!is_numeric($_POST['dag']))) {
			// Er is niks geselecteerd
			$userErrors[] = 'U heeft geen dag gekozen';
		}
		if (!isset($_POST['van']) || ($_POST['van'] == '') || (!preg_match("/(2[0-3]|[01][0-9]):[0-5][0-9]/", $_POST['van']))) {
			// Er is niks geselecteerd
			$userErrors[] = 'U heeft geen start tijd gekozen';
		}
		if (!isset($_POST['tot']) || ($_POST['tot'] == '') || (!preg_match("/(2[0-3]|[01][0-9]):[0-5][0-9]/", $_POST['tot']))) {
			// Er is niks geselecteerd
			$userErrors[] = 'U heeft geen eind tijd gekozen';
		}
		function timeDiff($firstTime,$lastTime) {
		    $firstTime=strtotime($firstTime);
		    $lastTime=strtotime($lastTime);
		    $timeDiff=$lastTime-$firstTime;
		    return ($timeDiff / 60) /60;
		}
		
		if(timeDiff($_POST['van'], $_POST['tot']) > 4) {

			$userErrors[] = 'U mag niet meer dan 4 uur achter elkaar wassen.';

		}

		if (count($userErrors) === 0) {
			// Er zit niks in $userErrors en dus is alles goed

			// Gebruik altijd MySQLi::escape_string() (alias van MySQLi::real_escape_string()) 
			// voor alle variabelen die een string bevatten en die de gebruiker kan 
			// aanpassen (alles met $_). Het gebruik van MySQLi::escape_string() zonder het
			// gebruik van quotes in de query is nog steeds niet goed.

			$startDateTime = '2013'. '-' .$_POST['maand']. '-' .$_POST['dag']. ' ' .$_POST['van'].':00';
			$endDateTime = '2013'. '-' .$_POST['maand']. '-' .$_POST['dag']. ' ' .$_POST['tot'].':00';

			$startDateTime = strtotime($startDateTime);
			$endDateTime = strtotime($endDateTime);
			$startDateTime = date('Y-m-d H:i:s', $startDateTime);
			$endDateTime = date('Y-m-d H:i:s', $endDateTime);

			$iQuery = 
			"	INSERT INTO
					Lijst
					(
						name,
						datum_van,
						datum_tot
					)
				VALUES
					(
						'".$mysqli->escape_string(ucfirst(trim($_POST['naam'])))."',
						'".$mysqli->escape_string($startDateTime)."',
						'".$mysqli->escape_string($endDateTime)."'
					)
				";
			// Gebruik in je query geen backtricks (`) 
			// en alleen quotes (') als je te maken hebt met een string ($_POST['naam'] in dit geval)
			$result = $mysqli->query($iQuery);
			// Voer de query uit
			if (!$result) {
				// De query is niet gelukt
				echo $mysqli->error;
			} else {
					// Er zijn meer dan 0 rijen ingevoegt, dus het is gelukt!

					// Met MySQLi::insert_id() kunnen we het id ophalen, hierbij
					// moet het id veld wel een auto_increment hebben.
					header('Location: index.php');
			}
		}



	}

}
?> 

	<?php if (count($userErrors) > 0) : 
		  // Er zijn errors gevonden ?>
		<div class="error">
			<ul>
			<?php foreach ($userErrors as $err) : ?>
				<li><?php echo $err; ?></li>
			<?php endforeach; ?>
			</ul>
		</div>
	<?php endif; 
    if (isset($resultMessage)) {
        echo $resultMessage; 
    }
    echo '<a href="index.php">terug</a>'
?>

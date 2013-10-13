<?php
// Error reporting alleen aanzetten in dev mode 1 = aan, 0 = uit
ini_set('display_errors', 1);
error_reporting(E_ALL);

if($_SERVER['REQUEST_METHOD'] == 'POST') {

	require_once('config/db_config.php');

	$userErrors = Array();
				
	$mysqli = new mysqli($host, $user, $passwd, $database);
	if ($mysqli->connect_errno) {
	    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
	}
	else {

			$iQuery = 
				" DELETE FROM 
					Lijst
					WHERE id > 0

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
?>

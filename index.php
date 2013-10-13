<!DOCTYPE html>
<html>
	<head>
		<title>Web App</title>
		
		<link rel="stylesheet" type="text/css" href="style.css" >
		<meta http-equiv="Cache-Control" content="no-cache"> 
		<meta http-equiv="Pragma" content="no-cache">
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js" type="text/javascript"></script>
		<script type="text/javascript" src="script.js"></script>	
	</head>

	<body>

		<div id="wrapper">
		
			<div id="Handleiding"><div id="close_h"></div></div>
			<div id="opmerkingen"><div id="close_o"><span>X</span></div></div>
		
		
		<div id ="wlijstkader">
			<span id="title">De waslijst</span>
			
			
				<form action="toevoegen.php" id="formkader" method="post">
					
						<input type="text" id="naamveld" name="naam" placeholder="Naam invoeren" maxlength="11"><br>
									<select name="maand" id="maand">
										<option> - Maand - </option>
										<option value="01">Januari</option>
										<option value="02">Febuari</option>
										<option value="03">Maart</option>
										<option value="04">April</option>
										<option value="05">Mei</option>
										<option value="06">Juni</option>
										<option value="07">Juli</option>
										<option value="08">Augustus</option>
										<option value="09">September</option>
										<option value="10">Oktober</option>
										<option value="11">November</option>
										<option value="12">December</option>
									</select>
						
									<select name="dag" id="dag">
										<option> - Dag - </option>
										<option value="01">1</option>
										<option value="02">2</option>
										<option value="03">3</option>
										<option value="04">4</option>
										<option value="05">5</option>
										<option value="06">6</option>
										<option value="07">7</option>
										<option value="08">8</option>
										<option value="09">9</option>
										<option value="10">10</option>
										<option value="11">11</option>
										<option value="12">12</option>
										<option value="13">13</option>
										<option value="14">14</option>
										<option value="15">15</option>
										<option value="16">16</option>
										<option value="17">17</option>
										<option value="18">18</option>
										<option value="19">19</option>
										<option value="20">20</option>
										<option value="21">21</option>
										<option value="22">22</option>
										<option value="23">23</option>
										<option value="24">24</option>
										<option value="25">25</option>
										<option value="26">26</option>
										<option value="27">27</option>
										<option value="28">28</option>
										<option value="29">29</option>
										<option value="30">30</option>
										<option value="31">31</option>
								</select>
								<br />

				
								<select id="tijdveld1" class="begint" name="van">
									<option> - van - </option>
									<option value="09:00">09:00</option>
									<option value="10:00">10:00</option>
									<option value="11:00">11:00</option>
									<option value="12:00">12:00</option>
									<option value="13:00">13:00</option>
									<option value="14:00">14:00</option>
									<option value="15:00">15:00</option>
									<option value="16:00">16:00</option>
									<option value="17:00">17:00</option>
									<option value="18:00">18:00</option>
									<option value="19:00">19:00</option>
									<option value="20:00">20:00</option>
									<option value="21:00">21:00</option>
									<option value="22:00">22:00</option>
									
									</select>
					
								<select id="tijdveld2" class="eindt" name="tot">
									<option> - tot - </option>
									<option value="10:00">10:00</option>
									<option value="11:00">11:00</option>
									<option value="12:00">12:00</option>
									<option value="13:00">13:00</option>
									<option value="14:00">14:00</option>
									<option value="15:00">15:00</option>
									<option value="16:00">16:00</option>
									<option value="17:00">17:00</option>
									<option value="18:00">18:00</option>
									<option value="19:00">19:00</option>
									<option value="20:00">20:00</option>
									<option value="21:00">21:00</option>
									<option value="22:00">22:00</option>
									<option value="23:00">23:00</option>
									
									
								</select>
					
				
									<br />
							<input type="submit" name="voegtoe" id="voegknop" value="Toevoegen">
				</form>
			
			
			<div id="menu">
				<span>Wasmachine</span>
			<ul>
				<li><a href="#" id="han">Handleiding</a></li>
				<span id="separator">|</span>
				<li><a href="#" id="opm">Opmerkingen</a></li>
			

			</ul>

			</div>
		
			
						
			<div id="gereedschappen">
				<span>Mijn planning</span>
			<ul>
				<form action="verwijderen.php" id="formkader" method="post">
				<li><input type="submit" name="verwijderen" id="verwijderknop" value="Verwijderen"></li>
			</form>
			

			</ul>

			</div>
			
			
			<div id="robijntje" title="Veel wasplezier"></div>
			
			<div id="misc"><?php
				$datum = date("j F Y");
				$dagvanweek = date("l");
				$arraydag = array(
				"Zondag",
				"Maandag",
				"Dinsdag",
				"Woensdag",
				"Donderdag",
				"Vrijdag",
				"Zaterdag"
				);
				$dagvanweek = $arraydag[date("w")];
				$arraymaand = array(
				"Januari",
				"Februari",
				"Maart",
				"April",
				"Mei",
				"Juni",
				"Juli",
				"Augustus",
				"September",
				"Oktober",
				"November",
				"December"
				);
				$datum = date("j ") . $arraymaand 
				[date("n") - 1] . date(" Y"); 
				echo "<b>Datum:</b> " . $dagvanweek . "," . $datum;   
				?>
			</div>
		
		</div>
				
			<div id="overzicht1"><?php include 'overzicht.php'; ?>
			
			
			
			</div>
		
		</div>	
		
		<?php// include 'toevoegen.php'; ?>	
	
	</body>

</html>
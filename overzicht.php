<?php	
require_once('config/db_config.php');
				
$mysqli = new mysqli($host, $user, $passwd, $database);
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
}

// eerst een array voor de tijden zodat elke datum alle tijden krijgt
$times = array();
for ($i=9; $i<24; $i++) {
    $times[$i] = array();
}
$res = $mysqli->query(
    "SELECT name, date(datum_van) as datum_van, hour(datum_van) as tijd_van,
    date(datum_tot) as datum_tot, hour(datum_tot) as tijd_tot
    FROM Lijst 
    WHERE hour(datum_van) <= 23
    AND hour(datum_van) >= 9 
    ORDER BY datum_van, tijd_van
    ");
$date = '';
if(!$res) {
    echo "Failed to run query: (" . $mysqli->errno . ") " . $mysqli->error;
} 
else {
    $matrix = array();
    // matrix vullen
    while ($row = $res->fetch_assoc()) {
        if ($row['datum_van'] != $date) {
            $date = $row['datum_van'];
            $matrix[$date] = $times;
        }

        for ($h = (int)$row['tijd_van']; $h <= (int)$row['tijd_tot']; $h++) {

            $matrix[$date][$h][] = $row['name'];
        }

    }
    // de tabel beginnen
    $var = '<table class="striped">';
    $var .= '<tr class="header" id="ax">';
    $var .= '<td id="a_datum">Datum</td>';
            
    for($i=9; $i<24; $i++) {

        $var .= '<td>' . $i . ':00</td>';                        
    }
            
    $var .= '</tr>';
    // de matrix uitlezen
    foreach ($matrix as $datekey => $timearray) {
        $var .= '<tr><td>' . $datekey . '</td>';
        foreach ($timearray as $names) {
            $var .= '<td>';
            if (count($names) > 0) {
                $var .= implode('<br>', $names);
            }
            else {
                $var .= '&nbsp;';
            }
            $var .= '</td>';
        }
        $var .= '</tr>' . PHP_EOL;
    }
    $var .= '</table>';
    echo $var;
}
?>
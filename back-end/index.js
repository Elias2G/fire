var express = require('express');
var mysql = require('mysql');
var app = express();

var pool = mysql.createPool({
  connectionLimit: 100,
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'ff-kappel',
  debug: false
});

const get = "/api/get/";

var termine = "SELECT * from termine_online";
var news = "SELECT * from news_online";

var einsätze = "SELECT anwesenheit.Datum, anwesenheit.Brandeinsatz, anwesenheit.Techn_Einsatz, anwesenheit.Techn_Hilfeleistung, anwesenheit.Beginn, anwesenheit.Dauer, anwesenheit.Ausrueckungsgrund, anwesenheit.Einsatzort, anwesenheit.`TLFA2000`, anwesenheit.`SLF`, anwesenheit.`MTF`, Sum(`Anwesend`+`Bereitschaft`)*(1) AS Anzahl FROM anwesenheit INNER JOIN `name für anwesenheit` ON anwesenheit.`Lfd_Nr` = `name für anwesenheit`.`Einsatz-Nr` GROUP BY anwesenheit.Datum, anwesenheit.Brandeinsatz, anwesenheit.Techn_Einsatz, anwesenheit.Techn_Hilfeleistung, anwesenheit.Beginn, anwesenheit.Dauer, anwesenheit.Ausrueckungsgrund, anwesenheit.Einsatzort, anwesenheit.TLFA2000, anwesenheit.SLF, anwesenheit.MTF, anwesenheit.Lfd_Nr HAVING (anwesenheit.Brandeinsatz = true) OR ( anwesenheit.Techn_Einsatz = True) OR (anwesenheit.Techn_Hilfeleistung = True)";

var mannschaft = "SELECT tabelle1.`Paß-Nr` AS id, tabelle1.Vorname, tabelle1.Zuname, funktion.Kürzel AS funktion, dienstgrad.Kürzel, funktionskürzel.Bezeichnung FROM (((tabelle1 INNER JOIN funktion ON tabelle1.`Paß-Nr` = funktion.`Paß-Nr`) INNER JOIN dienstgrad ON tabelle1.`Paß-Nr` = dienstgrad.`Paß-Nr`) INNER JOIN funktionskürzel ON funktion.Kürzel = funktionskürzel.Kürzel) GROUP BY tabelle1.`Paß-Nr`, tabelle1.Vorname, funktion.Kürzel, funktionskürzel.Bezeichnung ORDER BY tabelle1.`Paß-Nr`";



// SELECT ANWESENHEIT.Datum, ANWESENHEIT.Brandeinsatz, ANWESENHEIT.[Techn Einsatz], ANWESENHEIT.[Techn Hilfeleistung], ANWESENHEIT.Aktuell, ANWESENHEIT.Beginn, ANWESENHEIT.Dauer, ANWESENHEIT.Ausrueckungsgrund, ANWESENHEIT.Einsatzort, ANWESENHEIT.[1 = TLFA 2000], ANWESENHEIT.[2 = LF], ANWESENHEIT.[3 = MTF], Sum([Anwesend]+[Bereitschaft])*(-1) AS Anzahl
// FROM ANWESENHEIT INNER JOIN [NAME FÜR ANWESENHEIT] ON ANWESENHEIT.Lfd_Nr = [NAME FÜR ANWESENHEIT].[Einsatz-Nr]
// GROUP BY ANWESENHEIT.Datum, ANWESENHEIT.Brandeinsatz, ANWESENHEIT.[Techn Einsatz], ANWESENHEIT.[Techn Hilfeleistung], ANWESENHEIT.Aktuell, ANWESENHEIT.Beginn, ANWESENHEIT.Dauer, ANWESENHEIT.Ausrueckungsgrund, ANWESENHEIT.Einsatzort, ANWESENHEIT.[1 = TLFA 2000], ANWESENHEIT.[2 = LF], ANWESENHEIT.[3 = MTF], ANWESENHEIT.Online, ANWESENHEIT.Lfd_Nr
// HAVING (((ANWESENHEIT.Brandeinsatz)=True) AND ((ANWESENHEIT.Online)=True)) OR (((ANWESENHEIT.[Techn Einsatz])=True) AND ((ANWESENHEIT.Online)=True)) OR (((ANWESENHEIT.[Techn Hilfeleistung])=True) AND ((ANWESENHEIT.Online)=True)) OR (((ANWESENHEIT.Aktuell)=True) AND ((ANWESENHEIT.Online)=True));




const handle_database =  query => (req, res) => {
  pool.getConnection(function(err, connection) {
    if(err) {
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    }
    console.log("connected as id " + connection.threadId);

    connection.query(query, function(err, rows) {
      connection.release();
      if(!err) {
        res.json(rows);
      }
    });

    connection.on('error', function(err) {
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    });
  });
}

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const getApiCall = (api, query) => {
  app.get(api, handle_database(query));
}

getApiCall(get + "einsaetze", einsätze);
getApiCall(get + "mannschaft", mannschaft);
getApiCall(get + "termine", termine);
getApiCall(get + "news", news);




app.listen(8080);

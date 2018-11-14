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

var all = "select * from tabelle1";
var einsätze = "SELECT anwesenheit.Lfd_Nr AS id, anwesenheit.Datum, Brandeinsatz, `Techn Einsatz` AS Techn_Einsatz, `Techn Hilfeleistung` AS Techn_Hilfe, Beginn, Ende, Dauer, Ausrückungsgrund, Einsatzort  FROM ( anwesenheit INNER JOIN `name für anwesenheit` ON anwesenheit.`Lfd_Nr` = `name für anwesenheit`.`Einsatz-Nr` ) GROUP BY anwesenheit.`Lfd_Nr` ORDER BY anwesenheit.Datum";
var einsätzePersonen = "SELECT anwesenheit.Lfd_Nr AS id, `name für anwesenheit`.`Paß-Nr` FROM ( anwesenheit INNER JOIN `name für anwesenheit` ON anwesenheit.`Lfd_Nr` = `name für anwesenheit`.`Einsatz-Nr` ) ";
var mannschaft = "SELECT tabelle1.`Paß-Nr` AS id, tabelle1.Vorname, tabelle1.Zuname, funktion.Kürzel AS funktion, dienstgrad.Kürzel, funktionskürzel.Bezeichnung FROM (((tabelle1 INNER JOIN funktion ON tabelle1.`Paß-Nr` = funktion.`Paß-Nr`) INNER JOIN dienstgrad ON tabelle1.`Paß-Nr` = dienstgrad.`Paß-Nr`) INNER JOIN funktionskürzel ON funktion.Kürzel = funktionskürzel.Kürzel) GROUP BY tabelle1.`Paß-Nr`, tabelle1.Vorname, funktion.Kürzel, funktionskürzel.Bezeichnung ORDER BY tabelle1.`Paß-Nr`";
var termine = "SELECT anwesenheit.Lfd_Nr AS id, anwesenheit.Datum, Monatsübung, `Übung-Sonstige` AS Übung_Sonstige, Festbesuch, Beginn, Ende, Dauer, Ausrückungsgrund, Einsatzort  FROM ( anwesenheit INNER JOIN `name für anwesenheit` ON anwesenheit.`Lfd_Nr` = `name für anwesenheit`.`Einsatz-Nr` ) GROUP BY anwesenheit.`Lfd_Nr` ORDER BY anwesenheit.Datum";
// var Mannschaft = "select `aktueller Dienstgrad.Kürzel`, tabelle1.Zuname, tabelle1.Vorname, tabelle1.Status, funktion.Datum, funktionskürzel.Bezeichnung, funktion.Datum_anfang, DateDiff('yyyy',[Datum_anfang],Date()) AS Dauer
// FROM funktionskürzel INNER JOIN (funktion INNER JOIN (funktion INNER JOIN (tabelle1 INNER JOIN [aktueller Dienstgrad] ON tabelle1.[Paß-Nr] = [aktueller Dienstgrad].[Paß-Nr]) ON funktion.[Paß-Nr] = tabelle1.[Paß-Nr]) ON funktion.[Paß-Nr] = tabelle1.[Paß-Nr]) ON funktionskürzel.Kürzel = funktion.Kürzel
// GROUP BY [aktueller Dienstgrad].Kürzel, tabelle1.Zuname, tabelle1.Vorname, tabelle1.Status, funktion.Datum, funktionskürzel.Bezeichnung, funktion.Datum_anfang, DateDiff('yyyy',[Datum_anfang],Date()), funktion.Art, funktion.Kürzel
// HAVING (((funktion.Art)='erstfunktion FW') AND ((Count(funktion.Datum_ende))=0))
// ORDER BY tabelle1.Status";


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

getApiCall(get + "all", all);
getApiCall(get + "einsaetze", einsätze);
getApiCall(get + "einsaetzePersonen", einsätzePersonen);
getApiCall(get + "mannschaft", mannschaft);
getApiCall(get + "termine", termine);




app.listen(8080);

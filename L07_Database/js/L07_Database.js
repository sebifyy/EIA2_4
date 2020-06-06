"use strict";
/*
Aufgabe: Aufgabe 7
Name: Sebastian Hoffmann
Matrikel: 259316
Datum: 06.06.2020
Hiermit versichere ich, dass ich diesen Code zusammen mithilfe von Kommilitonen geschrieben habe.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
var HaushaltshilfeDatabase;
(function (HaushaltshilfeDatabase) {
    let server = Http.createServer();
    console.log(server);
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        console.log("What's up?");
        _response.setHeader("content-type", "text/html; charset-utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        _response.write("This is my response");
        _response.end();
    }
})(HaushaltshilfeDatabase = exports.HaushaltshilfeDatabase || (exports.HaushaltshilfeDatabase = {}));
//# sourceMappingURL=L07_Database.js.map
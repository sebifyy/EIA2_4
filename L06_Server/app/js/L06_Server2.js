"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Http = __importStar(require("http"));
const Url = __importStar(require("url"));
var L06_Server;
(function (L06_Server) {
    let server = Http.createServer();
    console.log(server);
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("Server starting on:" + port);
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        console.log("Gehts?");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
        }
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write("My Response");
        _response.end();
    }
})(L06_Server = exports.L06_Server || (exports.L06_Server = {}));
//# sourceMappingURL=L06_Server2.js.map
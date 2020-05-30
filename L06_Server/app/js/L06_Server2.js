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
//import { Http2Session } from "http2";
var L06_Server;
(function (L06_Server) {
    let server = Http.createServer();
    console.log(server);
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest() {
        console.log("Gehts?");
    }
})(L06_Server = exports.L06_Server || (exports.L06_Server = {}));
//# sourceMappingURL=L06_Server2.js.map
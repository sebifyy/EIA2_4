import * as Http from "http";
//import { Http2Session } from "http2";


export namespace L06_Server {
    let server: Http.Server = Http.createServer();
    console.log(server);

    let port: number | string | undefined = process.env.PORT;
    if (port ==undefined)
        port = 5001;

    
    console.log("Server starting on:" + port);   
    server.listen(port); 
    server.addListener("request", handleRequest);

    function handleRequest(): void{
        console.log("Gehts?");

    }
}
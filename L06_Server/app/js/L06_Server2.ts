import * as Http from "http";
import * as Url from "url";


export namespace L06_Server {
    let server: Http.Server = Http.createServer();
    console.log(server);

    let port: number | string | undefined = process.env.PORT;
    if (port ==undefined)
        port = 5001;

    
    console.log("Server starting on:" + port);   
    server.listen(port); 
    server.addListener("request", handleRequest);

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void{
        console.log("Gehts?");
        
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);            
        }

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        _response.write("My Response");
        _response.end();
    }
}
const http = require('http');
const fs = require('fs');


const data = {
    kudz: "donkey",
    blessy: "soccer",
    mom: "serenity"
}

// Create Server
const server = http.createServer((req, res)=>{
    // On Request create readable stream
    let html = fs.createReadStream(__dirname + '/src/index.html');
    let css = fs.createReadStream(__dirname + '/src/style.css');
    let js = fs.createReadStream(__dirname + '/src/main.js');
    let jquery = fs.createReadStream(__dirname + '/src/jquery-3.3.1.min.js');

    // Send CSS file on Request
    console.log(req.url)
    switch(req.url){
        case '/':
            res.writeHead(200, {"Content-Type": "text/html"});
            return html.pipe(res);
        case '/style.css':
            res.writeHead(200, {"Content-Type": "text/css"});
            return css.pipe(res);
        case '/api/data':
            res.writeHead(200, {"Content-Type": "application/json"});
            return res.end(JSON.stringify(data));
        case '/main.js':
            res.writeHead(200, {"Content-Type": "application/javascript"});
            return js.pipe(res)
        case '/jquery-3.3.1.min.js':
            res.writeHead(200, {"Content-Type": "application/javascript"});
            return jquery.pipe(res)
    }
})

// listen on Port 3000
server.listen(3000,()=>{console.log("listening on port 3000....")})
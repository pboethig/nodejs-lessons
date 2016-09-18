const spdy = require('spdy');
const fs = require('fs');


const options =
{
    key:fs.readFileSync('../etc/certs/server.key'),
    cert: fs.readFileSync('../etc/certs/server.crt')
}

spdy.createServer(options, (req, res)=>
{
    res.writeHead(200, {'Content-Type':'application/json'});

    var json = JSON.stringify({'message':'Hello Client'});

    res.end(json);

}).listen(8084);
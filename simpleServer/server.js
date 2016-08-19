const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');


const mimeTypes =
{
    "html":"text/html",
    "jpg":"image/jpg",
    "jpeg":"image/jpeg",
    "png":"image/png",
    "css":"text/css",
    "javascript":"text/javascript"
}


http.createServer(function(req, res){


var uri = url.parse(req.url).pathname;
console.log(uri);


var fileName = path.join(process.cwd(), unescape(uri));

console.log('Loading' + uri);
var stats;

try
{
    stats = fs.lstatSync(fileName);
}
catch(e)
{
    res.writeHead(404,{'Content-Type':'text/plain'});
    res.write('404 Not found\n');
    res.end();
    return;
}

if(stats.isFile())
{
    var mimeType = mimeTypes[path.extname(fileName).split(".").reverse()[0]];
    res.writeHead(200,{'Content-type': mimeType});
    var fileStream = fs.createReadStream(fileName);
    fileStream.pipe(res);

}else if(stats.isDirectory())
{
    res.writeHead(302,{'location':'index.html'});
}else
{
    res.writeHead(500, {'Content-type':'text/plain'});
    res.write('500 internal Error\n');
    res.end;
}


}).listen(1337);
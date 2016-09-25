const spdy = require('spdy');
const fs = require('fs');

const express = require('express');
const app = express();

const options = 
{
     key:fs.readFileSync('../etc/certs/server.key'),
    cert: fs.readFileSync('../etc/certs/server.crt')
}

app.get('/',(req,res)=>
{
    res.send('Hello express');
});

spdy.createServer(options, app).listen(8084);
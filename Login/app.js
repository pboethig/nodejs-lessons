var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');

var app = express();


app.set('views', path.join(__dirname,'views'));
app.set('view engine','jade');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

//create a route
app.get('/', function(req, res) {
    
  res.render('index', {title:'Welcome'});

});

//create a route
app.get('/about', function(req, res) {
    
  res.render('about',{title:'About'});

});

//route to get the contact form
app.get('/contact', function(req, res) {
  res.render('contact',{title:'Contact'});
});

//route to send the form
app.post('/contact/send', function(req, res) {
  
  var transporter = nodeMailer.createTransport({

  service : 'Gmail',
  auth : 
  {
    user:'pboethig@gmail.com',
    pass:'Sommer2016'
  }

  });

  var mailOptions = 
  {
    from:'Peter Böthig <pboethig@gmail.com>',
    to: 'pboethig@gmail.com',
    subject:'A simple test',
    text:'this a a simple test from Name:'+ req.body.name+' Email:'+req.body.email+' Message:'+req.body.message,
    html:'<p><ul><li>this a a simple test from Name:'+ req.body.name+'</li><li> Email:'+req.body.email+'</li><li>Message:'+req.body.message+'</li></ul>',
  }

  transporter.sendMail(mailOptions, function (err, info)
  {
    if(err)
    {
      console.log(err);
      res.redirect('/');
    }else
    {
      console.log('Message send');
      res.redirect('/');
    }
  });

});

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});
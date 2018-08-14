var cors = require('cors')
var fs = require('fs');
var bodyParser = require('body-parser')
const express = require('express');

const app = express()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000
app.set('port', port)
app.use( bodyParser.json());

var ipList = {};

app.get('/mediumDaily',cors(),function(req, res) {
  var req = require('req');
  var https = require('https');
  var parseString = require('xml2js').parseString;
  var xml = '';
  function xmlToJson(url, callback) {
    var req = https.get(url, function(res) {
      var xml = '';
      res.on('data', function(chunk) {
        xml += chunk;
      });
      res.on('error', function(e) {
        callback(e, null);
      });
      res.on('timeout', function(e) {
        callback(e, null);
      });
      res.on('end', function() {
        parseString(xml, function(err, result) {
          callback(null, result);
        });
      });
    });
  }
  var url = "https://medium.com/feed/unichain-tr"
  xmlToJson(url, function(err, data) {
    if (err) {
      return console.err(err);
    }
    var jsonString = JSON.stringify(data, null, 2);
    var objectValue = JSON.parse(jsonString);
    var g = objectValue['rss']['channel'][0];
    var resultArray = [];
    for(var item in g['item']){
      var data = {
        title: g['item'][item]['title'],
        link: g['item'][item]['link'],
        description : g['item'][item]['content:encoded']
      };
      resultArray.push(data);
    }
    res.send(resultArray);
  });
});

app.post('/contact',cors(),function(req,res){
  console.log(req.body)
  if (ipCheck(req)){
    let req=req.body
    saveLog(req)
    res.end("Done");
  }
  else{
    res.statusCode = 401;
    res("Failed");
  }
});
app.get('/', function (req, res) {
  var remoteAddress = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress;
  res.json({ "ipAddress": remoteAddress });
});

function ipCheck(req) {
  let ip=req.connection.remoteAddress
  if (ip in ipList){
    let count=ipList[ip].count
    if (count<3){
      ipList[ip]={"count":count+1,"time":new Date().getTime()};
      return true
    }
    else if((new Date().getTime() - ipList[ip].time) >(1000*60*60)){ //only tree mail in one hour
      ipList[ip]={"count":0,"time":new Date().getTime()};
      return true
    }
    return false
  }
  else{
    ipList[ip]={"count":0,"time":new Date().getTime()};
    return true
  }

}

function saveLog(req) {
  fs.appendFile("contact.txt",  JSON.stringify(req.body)+"\n", function(err) {
    if(err) {
      console.log("File save is failed ",err)
      return false
    }
    return true
  });
}

async function start() {

  app.listen(port, host)
  console.log('Server listening  on http://' + host + ':' + port) // eslint-disable-line no-console
}
start()

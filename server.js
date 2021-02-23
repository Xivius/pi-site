const cheerio = require('cheerio');
const express = require('express');
const http = require('http');
const app = express();

app.set('view-engine', 'ejs');
app.use(express.static('public'));
app.listen(8080);

app.get('/', function (req, res) {
  res.render("index");
});

app.get('/about-pi', function (req, res) {
  res.render("about-pi");
});

app.get('/how-to-use-pi', function (req, res) {
  res.render("how-to-use-pi");
});

app.get('/pi-test', function (req, res) {
  http.get("https://www.piday.org/million/", function getPiData(err, data) {
    if (err) {
      console.error(err);
      return;
    }

    var $ = cheerio.load(data);
    var PI = $('#million_pi').text();
    res.render("pi-test", {pi: PI});
  });
});

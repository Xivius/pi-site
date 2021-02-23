const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.listen(8080);

app.get('/', function (req, res) {
  res.render("pages/index");
});

app.get('/about-pi', function (req, res) {
  res.render("pages/about-pi");
});

app.get('/how-to-use-pi', function (req, res) {
  res.render("pages/how-to-use-pi");
});

app.get('/pi-test', function (req, res) {
  axios.get("https://www.piday.org/million/").then(
    function getPiData(response) {
      var $ = cheerio.load(response.data);
      var PI_VALUE = $('#million_pi').text();
      res.render("pages/pi-test", {pi_value: PI_VALUE});
    }
  ).catch((err) => {
    console.error(err);
    res.render("pages/pi-test", {pi_value: String(Math.PI)});
  });
});

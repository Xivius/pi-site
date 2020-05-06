

function loadXMLDoc() {
  var xmlhttp = (window.XMLHttpRequest) ?
    new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementByTagName("demo").innerHTML =
      this.responseText;
    }
  };
  xmlhttp.open("GET", "http://127.0.0.1:8082");
  xmlhttp.send();
}

const request = new require('request');
const cheerio = new require('cheerio');
var PI;
var $;
var clear = 0;
clear = request(
  "https://www.piday.org/million/",
  function(err, res, body) {
    $ = cheerio.load(body);
    PI = $('#million_pi').text();
});

while (clear == 0) {}
console.log(PI);

/* PI = "3.14159265358979323846264338327950288419716939937510582097494459230781" +
     "640628620899862803482534211706798214808651320"; */
/*
var  = document.getElementById("");
counter = 2;

do {

} while (userInput == PI[counter++]);

if (counter != PI.length) {
    alert("You Memorized " + (counter - 2) + " digits.");
} else {
    alert("Congrats! You memorized all " + (PI.length - 2) + "digits");
}

function processInput(userInput) {

}
*/

window.onload = main;

function main() {
  // MathJax Styling
  MathJax = {
    chtml: {
      displayAlign: 'left'
    }
  };

  var userAnswer = document.querySelector(".user-input");
  var piDisplay = document.querySelector(".correct-digits");
  var currentDigit = document.querySelector(".correct-digits .current");
  var nextDigit = document.querySelector(".correct-digits .next");
  var PI = piDisplay.dataset.pi;
  var counter = 2;
  var blinkOn = false;

  userAnswer.addEventListener("input", function processInput(event) {
    if (String(userAnswer.value) === PI[counter++]) {
      currentDigit.innerHTML += userAnswer.value;
    } else {
      if (counter < PI.length - 1) {
        alert(
          "You Memorized " + (counter - 2) + " digits.\n" +
          "The next digit is: " + PI[counter-1]
        );
      } else {
        alert("Congrats! You memorized all " + (PI.length - 2) + "digits");
      }
      currentDigit.innerHTML = "3.";
      counter = 2;
    }
    userAnswer.value = "";
  });

  setInterval(function () {
    if (blinkOn) {
      nextDigit.classList.add("next");
    } else {
      nextDigit.classList.remove("next");
    }
    blinkOn = !blinkOn;
  }, 800)
}

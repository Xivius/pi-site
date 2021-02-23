window.onload = main;

function main() {
  // MathJax Styling
  MathJax = {
    chtml: {
      displayAlign: 'left'
    }
  };

  var piDisplay = document.querySelector(".correct-digits");
  var userAnswer = document.querySelector(".correct-digits .user-input");
  var currentDigit = document.querySelector(".correct-digits .current");
  var PI = piDisplay.dataset.pi;
  var counter = 2;
  var blinkOn = true;

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

  piDisplay.addEventListener("click", function (e) {
    userAnswer.focus();
  });

  setInterval(function () {
    if (document.activeElement === userAnswer) {
      if (blinkOn) {
        userAnswer.style.backgroundColor = "yellow";
      } else {
        userAnswer.style.backgroundColor = "";
      }
      blinkOn = !blinkOn;
    } else {
      userAnswer.style.backgroundColor = "";
      blinkOn = true;
    }
  }, 500);
}

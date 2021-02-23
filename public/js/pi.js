window.onload = main();

function main() {
  // MathJax Styling
  MathJax = {
    chtml: {
      displayAlign: 'left'
    }
  };

  piTest();
}

function piTest() {
  console.log(PI);
  // "3.14159265358979323846264338327950288419716939937510582097494459230781" +
  // "640628620899862803482534211706798214808651320";
  var userAnswer = document.querySelector(".user-input");
  var piDisplay = document.querySelector(".correct-digits");
  var counter = 2;

  userAnswer.addEventListener("input", function processInput(event) {
    if (String(userInput) === PI[counter++]) {
      piDisplay.innerHTML += userInput;
    } else {
      if (counter != PI.length) {
        alert("You Memorized " + (counter - 2) + " digits.");
      } else {
        alert("Congrats! You memorized all " + (PI.length - 2) + "digits");
      }
    }
  });
}

PI = "3.14159265358979323846264338327950288419716939937510582097494459230781" +
     "640628620899862803482534211706798214808651320";
counter = 2;

do {
    userInput = 
} while (userInput == PI[counter++]);

if (counter != PI.length) {
    alert("You Memorized " + (counter - 2) + " digits.");
} else {
    alert("Congrats! You memorized all " + (PI.length - 2) + "digits");
}

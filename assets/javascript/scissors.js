var choseScissors = function() {

    // choice variable
    var userChoice = "scissors";

    // prints player choice
    document.getElementById("uChoice").innerHTML = "<b>Player</b> Choses Scissors!";

    // array of choices
    var jsChoice = [];

    // function that takes random number and assigns it a string
    var computer = function() { 

        // random variable triggered when rock is chosen
        var computerChoice = Math.random();
        
            if (computerChoice < 0.34) {
                computerChoice = "rock";
            } else if (computerChoice <= 0.67) {
                computerChoice = "paper";
            } else {
                computerChoice = "scissors";
            };

            // pushes data to new array
            jsChoice.push(computerChoice);
    }

    // function prints computer choice
    var computerIcon = function() {
        if (jsChoice[0] === "rock") {
            document.getElementById("cChoice").innerHTML = "<b>Computer</b> Choses Rock!";   
        } else if (jsChoice[0] === "paper") {
            document.getElementById("cChoice").innerHTML = "<b>Computer</b> Choses Paper!";
        } else {
            document.getElementById("cChoice").innerHTML = "<b>Computer</b> Choses Scissors!";
        }
    }

    // final function to determin winner
    var compare = function(choice1, choice2) {

        console.log("You have chosen " + choice1 + ".");
        console.log("Computer has chosen " + choice2 + ".");
        
        if (choice1 === choice2) {
            return "<h3>The result is a tie!</h3>"

        } else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                return "<h3>rock wins</h3>";
                console.log("rock wins");
            } else {
                return "<h3>paper wins</h3>";
                console.log("paper wins");
            }

        } else if (choice1 === "paper") {
            if (choice2 === "rock") {
                return "<h3>paper wins</h3>";
                console.log("paper wins");
            } else {
                return "<h3>scissors wins</h3>";
                console.log("scissors wins");
            }

        } else if (choice1 === "scissors") {
            if (choice2 === "paper") {
                return "<h3>scissors wins</h3>";
                console.log("scissors wins");
            } else {
                return "<h3>rock wins</h3>";
                console.log("rock wins");
            }
        }
    }

// call functions
computer();
computerIcon();
document.getElementById("results").innerHTML = compare(userChoice, jsChoice[0]);


}; // close of paper button function


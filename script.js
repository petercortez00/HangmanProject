// Global Variables
var words = ["work","chris","computer","shell","niko","high", "place", "monkey", "chair","angel", "popcorn","label","drive","turtle","cartel","dentist","phone","headphones"];
var guesses = 7;
var guessedLetters = [];
var word;

function  startGame(){
    word = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    guesses = 7;
    printWord();
    document.getElementById("outcome").innerHTML = "";
    document.getElementById("guesses").innerHTML = "";
    deleteLetters();
    // guessLetter();
    console.log(word);
}
// Reset the board, clear out any traces of the last round from guessedLetters

//don't touch
function printWord() {
    var printWord = "";
    for(var i = 0; i < word.length; i++) {
        if (guessedLetters.indexOf(word[i]) == -1){
            printWord +=  "_ ";
        } else {
            printWord += word[i];
        }
    }
    document.getElementById("output").innerHTML = printWord;
    return printWord;
}

// if there are no underscores and there are still guesses left, return you won
function guessLetter() {
    var letter = document.getElementById("letters").value;
    guessedLetters.push(letter);
    var printedWord = printWord();
    console.log(printedWord);

    // Counts the tries and tells you when you have won the game.
    if (printedWord.indexOf(letter) == -1) {
        document.getElementById("guesses").innerHTML = guesses;
            if (guesses == 0) {
                document.getElementById("guesses").innerHTML = "Out of guesses.";
                return printedWord;
            }
        guesses = guesses - 1;
    } else {
        if (printedWord.indexOf("_") == -1) {
            guesses;
            document.getElementById("outcome").innerHTML = "You Won, congrats. The word is ";
            document.getElementById("guesses").innerHTML = "You had " + guesses + " guesses left. Noice.";
            return printedWord;
        }
    }
    document.getElementById("outcome").innterHTML = "You lost, try again.";
    deleteLetters();
}

//deletes the letter after it is selected
function deleteLetters(){
    document.getElementById("show").innerHTML = "Select a letter.";
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
    "r","s","t","u","v","w","x","y","z"];
    var solution = "";
    for(var i = 0; i < alphabet.length; i++) {
        if (guessedLetters.indexOf(alphabet[i]) == -1) {
            solution += "<option value'" + i + "'>" + alphabet[i] + "</options>"
        }
    }
    document.getElementById("letters").innerHTML = solution;
}
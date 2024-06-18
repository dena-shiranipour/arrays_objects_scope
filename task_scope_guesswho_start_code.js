// // // GUESS 1 ///////////////////
let guess = {
  hair_colour: "red",
  eye_colour: "blue",
  hat: false,
  glasses: true,
  firstName: "Joseph",
};

const guessWho = function () {
  return `Guess who is ${guess.firstName}`;
};

const finalAnswer = guessWho();
console.log(finalAnswer);
// // // Prediction: 
// Joseph


// // GUESS 2 ///////////////////

let firstName = "Donna";

const guessWho = function () {
  const glasses = false;
  let firstName = "Liz";
  return `Guess Who is ${firstName}.`;
};

const guess1 = guessWho();
console.log("guess1: ", guess1);

const guess2 = `Guess Who is ${firstName}`;
console.log("guess2: ", guess2);


// // prediction:
// Guess who is Liz
// Guess who is Donna


// // GUESS 3 ///////////////////

const guess = {
  hair_colour: "black",
  eye_colour: "brown",
  hat: false,
  glasses: false,
  firstName: "Andy",
};

const changeHat = function () {
  guess.hat = !guess.hat;
};

const changeGuess = function (newName) {
  guess.firstName = newName;
};

const guessWho = function () {  //these 3 functions are just declared, not called yet between lines 52-62
  return `Guess Who is ${guess.firstName}`;
};

changeHat();
//so hat is true

if (guess.hat) { //if ... is true
  changeGuess("Chris");
}

const finalAnswer = guessWho();
console.log(finalAnswer);

//guess Chris

// // GUESS 4 ///////////////////

let firstName = "Gail";

if (firstName === "Gail") {
  let firstName = "Ashley";
} //the let is only blocked scope, so only ashley within the scope of these brackets

const guessWho = function () {
  return `Guess Who is ${firstName}`;
};

const finalAnswer = guessWho();
console.log(finalAnswer);

//prediction Ashley....WRONG!

//ANSWER: GAIL because scope says let WITHIN THE SCOPE ONLY.

// // GUESS 5 ///////////////////

const guess = {
  hair_colour: "blonde",
  eye_colour: "brown",
  hat: false,
  glasses: false,
  firstName: "Jennifer",
};

const changeGuess = function () {
  guess = {
    hair_colour: "blonde",
    eye_colour: "blue",
    hat: false,
    glasses: false,
    firstName: "Kyle",
  };
};

changeGuess();
console.log(`Guess Who is ${guess.firstName}`);

//prediction kyle
finalAnswer.charAt. trick question bc its a const and u cant change a consts (but if u make it into a let instead, then u CAN change it, so would be kyle)
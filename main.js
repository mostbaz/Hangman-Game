// Letters
const letters = "abcdefghijklmnopqrstuvwxyz"

//Get Array From Letters 
let = lettersArray = Array.from(letters);

// Select Letters Container
let = lettersContainer = document.querySelector(".letters")

// Generate Letters 
lettersArray.forEach(letter => {

  // Create Span
  let span = document.createElement("span")

  // Create Letters Text Node
  let theLetter = document.createTextNode(letter)

  // Append The Letter To Span
  span.appendChild(theLetter)

  // Add Class On Span
  span.className = 'letter-box'

  // Append Span To The Letters Container
  lettersContainer.appendChild(span)
});

// Object Of Words + Categories
const words = {
  programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
  countries: ["Iraq", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

// Get Random Property

let allKeys = Object.keys(words);

// Random Number Depend On Keys Length
let randomPropNumber = Math.floor(Math.random() * allKeys.length)

// Category
let randomPropName = allKeys[randomPropNumber]

// Category Words
let randomPropValue = words[randomPropName]

// // Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length)

// The Chosen Words
let randomValueValue = randomPropValue[randomValueNumber]

// Set Category Info
document.querySelector(".game-info span").innerHTML = randomPropName


// Select Letters Guss Elmemet
let lettersGussContainer = document.querySelector(".letters-guess")

// Convert Chosen Word To Array
let lettersAndSpace = Array.from(randomValueValue)

// Create Spans Depened On Word
lettersAndSpace.forEach(letter => {

  // Create Empty Span
  let emptySpan = document.createElement("span")

  // If letter Is Space
  if (letter === ' ') {

    //Add Calss To The Span
    emptySpan.className = 'with-space'

  }

  //Append Span To The Letters Guess Container
  lettersGussContainer.appendChild(emptySpan)

})

// Select Guess Spans
let guessSpan = document.querySelectorAll(".letters-guess span")

// Set Wrong Attempts
let wrongAttempts = 0

// Select The Draw Element
let theDraw = document.querySelector(".hangman-draw")


// Handle Clicking On Letters
document.addEventListener("click", (e) => {

  // Set The Chose Status 
  let theStatus = false


  if (e.target.className === `letter-box`) {

    e.target.classList.add("clicked");

    // Get Clicked Letter
    let theClickedLetter = e.target.innerHTML.toLowerCase()

    // The Chosen Word
    let theChosenWord = Array.from(randomValueValue.toLowerCase())

    theChosenWord.forEach((wordLetter, WordIndex) => {

      // If The Clicked Letter Equal To One Of The Chosen Word Letter
      if (theClickedLetter == wordLetter) {

        // Set Status To Correct
        theStatus = true

        //Loop On All Guess Spans

        guessSpan.forEach((span, SpanIndex) => {

          if (WordIndex === SpanIndex) {

            span.innerHTML = wordLetter

          }

        })

      }

    })



    // Outside Loop

    // If Letter Is Wrong
    if (theStatus !== true) {

      // Increase The Wrong Attempts
      wrongAttempts++;

      // Add Class Wrong On The Draw Element
      theDraw.classList.add(`wrong-${wrongAttempts}`);

      // Play Fail Sound
      document.getElementById("fail").play();

      if (wrongAttempts === 8) {

        endGame();

        lettersContainer.classList.add("finished");

      }

    } else {

      // Play Success Sound
      document.getElementById("success").play();

    }

  }

});

// End Game Function
function endGame() {

  // Create Popup Div
  let div = document.createElement("div");

  // Create Text
  let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);

  // Append Text To Div
  div.appendChild(divText);

  // Add Class On Div
  div.className = 'popup';

  // Append To The Body
  document.body.appendChild(div);

}
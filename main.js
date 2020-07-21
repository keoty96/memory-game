const cardArray = [
  {
    name: "bleach",
    img: "img/bleach.jpg",
  },
  {
    name: "bleach",
    img: "img/bleach.jpg",
  },
  {
    name: "bokuNoHero",
    img: "img/bokunohero.jpg",
  },
  {
    name: "bokuNoHero",
    img: "img/bokunohero.jpg",
  },
  {
    name: "euphonium",
    img: "img/euphonium.jpg",
  },
  {
    name: "euphonium",
    img: "img/euphonium.jpg",
  },
  {
    name: "grayman",
    img: "img/grayman.jpg",
  },
  {
    name: "grayman",
    img: "img/grayman.jpg",
  },
  {
    name: "kakegurui",
    img: "img/kakegurui.jpg",
  },
  {
    name: "kakegurui",
    img: "img/kakegurui.jpg",
  },
  {
    name: "neverland",
    img: "img/neverland.jpg",
  },
  {
    name: "neverland",
    img: "img/neverland.jpg",
  },
];

const grid = document.querySelector(".grid");
let btnBegin = document.querySelector("#btn-begin");
let cardName = [];
let cardNameId = [];
let cardsMatched = [];
let myTimer;
var sec = 0;

btnBegin.addEventListener("click", createBoard);

//shuffle the cardArray
cardArray.sort(() => 0.5 - Math.random());

//create game board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    /* create img element */
    let card = document.createElement("img");

    /* set attributes to img elements */
    card.setAttribute("src", "img/cardCover.jpg");
    card.setAttribute("data-id", i);

    /* assign event listener to the img element when clicked */
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
  startTimer();
}

function checkMatch() {
  //get all the img elements
  let allCards = document.querySelectorAll("img");
  const optionOne = cardNameId[0];
  const optionTwo = cardNameId[1];

  //check if the cards names are the same
  if (cardName[0] === cardName[1]) {
    cardsMatched.push(cardName);
    console.log(cardsMatched.length);
  } else {
    allCards[optionOne].setAttribute("src", "img/cardCover.jpg");
    allCards[optionTwo].setAttribute("src", "img/cardCover.jpg");
    console.log("try again");
  }

  //clear arrays
  cardName = [];
  cardNameId = [];

  //check if all cards are found
  if (cardsMatched.length === 6) {
    console.log("You Win");
    myStopFunction();
  }
}

function flipCard() {
  //get the id array
  let cardId = this.getAttribute("data-id");
  //get card name
  cardName.push(cardArray[cardId].name);
  //get card id
  cardNameId.push(cardId);
  //set image from array
  this.setAttribute("src", cardArray[cardId].img);
  //check for a match
  if (cardName.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

//timer
function pad(val) {
  return val > 9 ? val : "0" + val;
}

function startTimer() {
  myTimer = setInterval(function () {
    document.getElementById("seconds").innerHTML = pad(++sec % 60);
    document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
  }, 1000);
}
function myStopFunction() {
  clearInterval(myTimer);
}

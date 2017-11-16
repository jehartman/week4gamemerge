var newGame = false; //prevents the game from continuing to display guesses on win or loss
var randItemPrice;
var coinsArray = [];
var runningTotal = 0;
var wins = 0;
var losses = 0;
var images = ["assets/images/coin1.png", "assets/images/coin2.png", "assets/images/coin3.png", "assets/images/coin4.png"];
var itemImages = [{description: "apple", url: "assets/images/apple.png"}, {description: "ham", url:  "assets/images/ham.png"}, {description: "rice", url: "assets/images/rice.png"}, {description: "salt", url:  "assets/images/salt.png"}, {description: "shoelaces", url: "assets/images/shoelaces.png"}, {description: "book", url: "assets/images/book.png"}, {description: "soap", url: "assets/images/soap.png"}];


// Why does document.ready stop the game from working?
// There really should be $(document).ready here but I was running into issues.

//generates the random item price and the coin values, pushes coin values into coinsArray, and also resets values from previous game
function generateNumbers() {
  
  newGame = false;
  console.log("generateNumbers ran");
  runningTotal = 0;
  randItemPrice = 0;
  $("#offer").html(runningTotal);
  randItemPrice = Math.floor((Math.random() * 102) + 19);
  console.log(randItemPrice);  
  $("#randItemPrice").html(randItemPrice);
  for (i=0; i<4; i++) {
    var coinNumber = Math.floor((Math.random() * 12) + 1);
    console.log(coinNumber);
    coinsArray.push(coinNumber);
    // $()
    console.log(coinsArray);
  }
  }

//starts the game
$("#start").on("click", function() {
  if (newGame === false) {
  $("#snarkBox").append("<li>" + "Your item is on the counter." + "</ul>");
  var selectedImageUrl = itemImages[(Math.floor((Math.random() * itemImages.length)))].url;
  console.log(selectedImageUrl);
  $("#itemPic").attr("src", selectedImageUrl);
  generateNumbers();
    }
  else {
    return;
    }
  });

//updates the running total and returns the new value
function addNumbers (a,b) {
  runningTotal = a + b;
  $("#offer").html(runningTotal);
  console.log(runningTotal);
  return runningTotal;
}

//updates the scoreboard after determining win, loss, or game not over result
function winLose () {
  if (runningTotal > randItemPrice) {
    console.log("loss");
    losses++;
    console.log(losses);
    $("#ripOffs").html(losses);
    $("#snarkBox").prepend("<li>" + "The merchant smiles broadly and takes your money." + "</li>");
    youLose();
    gameOver();
  }
  else if (runningTotal === randItemPrice) {
    console.log("win");
    wins++;
    $("#wins").html(wins);
    $("#snarkBox").prepend("<li>" + "The merchant impassively accepts your money and bags your item. Nice job!" + "</li>");
    youWin();
    gameOver();
  }
  else {
    $("#snarkBox").prepend("<li>" + "The merchant shakes his head and taps the price tag." + "</li>");
    console.log("keep playing");
  }
}
// THIS FUNCTION WAS TO RANK EACH IMAGE RANDOMLY TO SCRAMBLE COIN ORDER ON REFRESH. PUTTING THIS ON HOLD UNTIL GAME WORKS.
// function rankImages(array) {
//  for (i=1; i<5; i++) {
//    rank = (array[Math.floor(Math.random()*array.length)]);
//    console.log(rank);
//    $("#image-" + i).attr("src", images[i]);
//    var index = array.indexOf(i);
//    if (index > -1) {
//        array.splice(index, 1);
//        console.log(array);
//  }
// };
// };

// rankImages (coinsArray);

//displays loss message and new game button
function youLose () {
  // newGame = true;
  $("#snarkBox").append("<div id='endTile'>" + "You got ripped off!" + "</div>");
  $("#endTile").append("<button id='playAgain'>" + "Buy Another Item" + "</button>");
}

function youWin () {
  // newGame = true;
  $("#snarkBox").append("<div id='endTile'>" + "Congrats! You paid the right price." + "</div>");
  $("#endTile").append("<button id='playAgain'>" + "Buy Another Item" + "</button>");
}

function gameOver() {
  console.log("gameOver ran");
  newGame = true;
  coinsArray = [];
  images = ["assets/images/coin1.png", "assets/images/coin2.png", "assets/images/coin3.png", "assets/images/coin4.png"];

  //display you lose message
  //display play again button
  //put an if then return statement 
}

$(".coin").on("click", function() {
  if (newGame === false) {
  var coinValueAttribute = $(this).attr("value");
  console.log(coinValueAttribute);
  console.log(runningTotal);
  coinValue = coinsArray[coinValueAttribute];
  console.log(coinValue);
  addNumbers(coinValue, runningTotal);
  winLose ();

  }

  else {
    console.log("newGame is true");
    return;
  }
});

$("#container").on("click", "#playAgain", function() {
  console.log("playAgain ran");
  $("#endTile").remove();
  $("#playAgain").remove();
  newGame = false;
  $("#itemPic").attr("src", "assets/images/placeholder.png");
  $("#randItemPrice").text("");


});











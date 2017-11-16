//NOTE: These are my starting pseudocode notes.

//click to start
//variables: wins, ripoffs, price, offer, c1 c2 c3 c4,
//generate random item and price
//generate coins and prices
//listen for click
//on click, add c value to offer
//repeat until offer is = or greater than price
//if equal, win
//if over, ripoff
//if win, add 1 to wins and reset c values and price, and set offer to 0
//if loss, add 1 to losses and reset and reset c values and price, and set offer to 0
//if start over, reset wins and losses and restart


//NOTE: I began alright until I got past a certain point, then I spent hours and hours trying to modify example code from class and Googling. Two hours ago I had code that at least was straightforward, but the code immediately below is now a jumbled scratchpad of gibberish and various different attempts at making something work. This represents about 15 hours of work Saturady and Sunday.

$(document).ready(function() {

  $("#start").on("click", function() {

            var wins = 0;
            var ripoffs = 0;
            // var coins = ["coin1", "coin2", "coin3", "coin4"];
            var coinImage = ["assets/images/coin1.png", "assets/images/coin2.png", "assets/images/coin3.png", "assets/images/coin4.png"];
            var coinValue = "";
            var size = coinImage.length;
            var randCoin = Math.floor(size * Math.random());
            var userChoice;
            var valueOfCoin = [];

          function randCoin () {
            targetCoin = coins[Math.floor(math.random() * coins.length)];
            $("#randCoin").
          }
            for (var i = 0; i < 4; i++) {

            var coinBtn = $("<button>");

            coinBtn.addClass("coin" + [i]);

            coinBtn.attr("coin-number", coin[i]);

            $("#coins").append(coinBtn);

              }

            function createCoinList() {

                coins.sort(function() {
                  return 0.3 - Math.random();
                });

            for (var i = 0; i < coin.length; i++) {
              valueOfCoin.push(coin[i]);
            }

            valueOfCoin.sort(function() {
              return 0.3 - Math.random();
            });

            for (var k = 0; k <coin.length; k++); {
              var holder = document.createElement("td");
              $("#coins").append(holder);

              $(holder).css("img", valueOfCoin[i]);
            }

            }

//NOTE: code below this point is the original code I wrote mostly myself to begin with, then I became concerned I was doing it wrong. Everything above is the subsequent product of hours of confusion.

                function setPrice() {
                  var price = Math.floor((Math.random() * 102) + 19);
                  console.log(price);
                  }



                function setCoins() {
                  //i got this from google. but as i understand it, this creates an empty array coinValue
                  var coinValue = [];
                  //this loops 12 times through the array and pushes 1 through 12 into the array
                  for (var i = 1; i <= 12; i++) {
                    coinValue.push(i);

                      //this sets the values of each coin, however i still need to solve the duplicate coin issue

                        }
                        var coin1 = Math.floor((Math.random() * 12) + 1);
                        console.log("Coin 1 =" + coin1);
                        var coin2 = Math.floor((Math.random() * 12) + 1);
                        console.log("Coin 2 =" + coin2);
                        var coin3 = Math.floor((Math.random() * 12) + 1);
                        console.log("Coin 3 =" + coin3);
                        var coin4 = Math.floor((Math.random() * 12) + 1);
                        console.log("Coin 4 =" + coin4);

                      }
    setPrice();
    setCoins ();

    });

//NOTE: The below code is my inital attempt at setting coin values and adding them before I lost comprehension of what I was doing. It was never funtional, nor was almost anything I did.

    // $("#coin1").on("click", function () {
    //     var offer = coin1;
    //     var prevOffer = 0;
    //     var runTotal = 0;
    //     function addCoins () {
    //           var newOffer = (offer + prevOffer);
    //           console.log(newOffer);
    //         }
    //
    //       addCoins ();
    //       console.log(runTotal);
    //
    //       addCoins ();
    //
    //     });
    //
    //
    //     $("#coin2").on("click", function () {
    //         var offer = coin2;
    //         var prevOffer = 0;
    //         var runTotal = 0;
    //         function addCoins () {
    //               var newOffer = (offer + prevOffer);
    //               console.log(newOffer);
    //             }
    //
    //           addCoins ();
    //           console.log(runTotal);
    //
    //           addCoins ();
    //
    //         });
    //         $("#coin3").on("click", function () {
    //             var offer = coin3;
    //             console.log(coin3);
    //             var prevOffer = 0;
    //             var runTotal = 0;
    //             function addCoins () {
    //                   var newOffer = (offer + prevOffer);
    //                   console.log(newOffer);
    //                 }
    //
    //               addCoins ();
    //               console.log(runTotal);
    //
    //               addCoins ();
    //
    //             });
    //             $("#coin4").on("click", function () {
    //                 var offer = coin4;
    //                 var prevOffer = 0;
    //                 var runTotal = 0;
    //                 function addCoins () {
    //                       var newOffer = (offer + prevOffer);
    //                       console.log(newOffer);
    //                     }
    //
    //                   addCoins ();
    //                   console.log(runTotal);
    //
    //                   addCoins ();

      });

});
// //then when c is clicked, add value of c to offer and display total
// //then compare to price

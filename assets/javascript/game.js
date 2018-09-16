

var counter = 0;
var winCounter = 0;
var loseCounter = 0;

// Random selecting a number from 19-120
var goalNum = 119;
var targetNumber = Math.floor(Math.random() * goalNum) + 19;
console.log(targetNumber);
// Output the targetNumber to HTML
$("#targetNum").text(targetNumber);

// Create 4 numbers in an array and generating each element numbers from 1-12
var numberValue = []
while (numberValue.length < 4) {
  var randomnumber = Math.floor(Math.random() * 12) + 1;
  if (numberValue.indexOf(randomnumber) > -1) continue;
  numberValue[numberValue.length] = randomnumber;
}

console.log(numberValue);

for (var i = 0; i < numberValue.length; i++) {

  // myImages is storing all the new class, data, and attribute
  var myImages = $("<img>");
  myImages.addClass("gifImages");
  myImages.attr("src", "assets/images/deanWinchester.gif");
  myImages.attr("data-imageValue", numberValue[i]);

  $("#arrayImages").append(myImages);
}
// Give gifs click function
$(".gifImages").on("click", function () {
  // Assigning each image to the 4 random element value originally (numberValue)
  var imageValue = ($(this).attr("data-imageValue"));
  imageValue = parseInt(imageValue);
  console.log(imageValue);

  counter += imageValue;
  console.log('console.log(counter)' + counter)

  $("#myScore").text(counter);

  if (counter === targetNumber) {

    // If user win... Do these..

    winCounter++;
    console.log('Your number of wins = ' + winCounter);
    var audio = new Audio('assets/audio/street-fighter you win.mp3');
    audio.play();
    var result = $("<img>");
    myImages.addClass("imageResult");
    myImages.attr("src", "https://media.giphy.com/media/UvY7dOU9kNs88/giphy.gif");
    $("#resultImage").append(result);
    $("#winNum").text(winCounter);
    setTimeout(function () {
      console.log("It's resetting now");
      reset();
    }, 5000);
  }

  else if (counter >= targetNumber) {

    // If user lose.. Do these...
    loseCounter++;
    console.log('Your number of losses = ' + loseCounter);
    var audio = new Audio('assets/audio/the-price-is-right-losing-horn.mp3');
    audio.play();
    var result = $("<img>");
    myImages.addClass("imageResult");
    myImages.attr("src", "https://media.giphy.com/media/3b8E5OWGWPTQbNcOKW/giphy.gif");
    $("#resultImage").append(result);
    $("#loseNum").text(loseCounter);
    setTimeout(function () {
      console.log("It's resetting now");
      reset();
    }, 5000);

  }

});


// Create reset function here. Do not reset winCounter and loseConter.


function reset() {
  counter = 0;
  var goalNum = 119;
  var targetNumber = Math.floor(Math.random() * goalNum) + 19;
  console.log(targetNumber);
  // Output the targetNumber to HTML
  $("#targetNum").text(targetNumber);
  // This hide image crap right here took me forever!!!!!!!!!
  $('img[src="https://media.giphy.com/media/3b8E5OWGWPTQbNcOKW/giphy.gif"]').css("display", "none");

  var numberValue = []
  while (numberValue.length < 4) {
    var randomnumber = Math.floor(Math.random() * 12) + 1;
    if (numberValue.indexOf(randomnumber) > -1) continue;
    numberValue[numberValue.length] = randomnumber;
  }
}

// I can't seem to get the reset function running correctly without spamming JS with more repeated variables and functions.



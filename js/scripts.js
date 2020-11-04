// Business Logic ----- >
function Player(name, turnTotal, diceRoll, overallScore) {
  this.name = name;
  this.diceRoll = 0;
  this.turnTotal =0;
  this.overallScore =0;
}

Player.prototype.roll = function() {
  var randomNum = Math.floor((Math.random() * 6) + 1);
  this.diceRoll = randomNum;
  if (randomNum == 1) {
    this.turnTotal = 0;
    return alert("You got a 1 :(");
  }
}
// User Interface Logic ------ >
$(document).ready(function() {
  $("form#diceGame").submit(function(event) {
    event.preventDefault();
    var gamer1 = $("#player1Name").val();
    var gamer2 = $("#player2Name").val();
    // Objects
    player1 = new Player(gamer1);
    player2 = new Player(gamer2);

    $(".player1NameOutput").text(player1.name);
    $(".player2NameOutput").text(player2.name);
  });
});


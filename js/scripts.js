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
  this.turnTotal += this.diceRoll;
}
Player.prototype.takeTurn = function() {
  // player starts turn by rolling a die
  this.roll();
  // if roll is NOT 1, player decides to roll or hold.
  
  // Check for hold === "yes", then sum total rolls for this turn and sum with player.overallScore

  // if roll === "yes", then add previous roll value to this turn's total value

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
  $(".roll1").click(function(event) {
    event.preventDefault();
    player1.roll();
    $(".diceRoll1").text(player1.diceRoll);
    $(".turnScore1").text(player1.turnTotal);
  });
  $(".roll2").click(function(event) {
    event.preventDefault();
    player2.roll();
    $(".diceRoll2").text(player2.diceRoll);
    $(".turnScore2").text(player2.turnTotal);
  });
});


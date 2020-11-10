export default function Player(name) {
  this.name = name;
  this.diceRoll = 0;
  this.turnTotal = 0;
  this.overallScore = 0;
  this.currentWins = 0;
}

Player.prototype.roll = function() {
  let randomNum = Math.floor((Math.random() * 6) + 1);
  this.diceRoll = randomNum;
  if (randomNum == 1) {
    this.turnTotal = 0;
    if (this == player1) {
      // gray out player1's playing area and make full opacity player2's playing area
      $("div.player1Box").addClass("not-active");
      $("div.player2Box").removeClass("not-active");
    }
    if (this == player2) {
      $("div.player2Box").addClass("not-active");
      $("div.player1Box").removeClass("not-active");
    }
    return alert("You got a 1 :( Next players turn");
  }
  if ((this.diceRoll + this.turnTotal + this.overallScore) >= 100) {
    alert("Game Over. You win!");
    $(".resetButton").show();
    $(".result").show();
    $(".wins").show();

    $("div.player1Box").addClass("not-active");
    $("div.player2Box").addClass("not-active");
    console.log("We're getting into conditional code block at bottom of .roll function call");
    this.currentWins++;
  }
  this.turnTotal += this.diceRoll;
};

Player.prototype.hold = function () {
  this.overallScore += this.turnTotal;
};

Player.prototype.scoreCheck = function() {
  if (this.overallScore >= 100) {
    this.currentWins++;
    alert("Game Over. Your overall score is greater than or equal to 100. You win!");
    $(".resetButton").show();
    $(".result").show();

  } else if (($(".turnScore1").val() + $(".turnScore2").val()) >= 100) {
    alert("Game Over. Our jQueries are telling us you've won!");
    $(".resetButton").show();
    $(".result").show();
  } else {
    return false;
  }
};
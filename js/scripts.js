// Business Logic ----- >
function Player(name) {
  this.name = name;
  this.diceRoll = 0;
  this.turnTotal = 0;
  this.overallScore = 0;
  this.currentWins = 0;
}
//Creates Rolling variable and conditiional statement for "1"
Player.prototype.roll = function() {
  var randomNum = Math.floor((Math.random() * 6) + 1);
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
  if ((this.diceRoll + this.turnTotal + this.overallScore) >= 10) {
    alert("Game Over. You win!")
    console.log("We're getting into conditional code block at bottom of .roll function call");
    
    this.currentWins++;
  }
  this.turnTotal += this.diceRoll;
}

Player.prototype.hold = function () {
  this.overallScore += this.turnTotal;
}
Player.prototype.scoreCheck = function() {
  if (this.overallScore >= 10) {
    this.currentWins++;
    //$(".turnScore1").val();
    alert("Game Over. You win!")
    $(".resetButton").show();
    $(".result").show();
  } else if (($(".turnScore1").val() + $(".turnScore2").val()) >= 10) {
    alert("Game Over. Our jQueries are telling us you've won!")
    $(".resetButton").show();
    $(".result").show();
  } else {
    return false;
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
    // span class="player2WinTotal"
    $("span.player2WinTotal").text(player2.currentWins);
    $("span.player1WinTotal").text(player1.currentWins);
  });
  
  $(".roll1").click(function(event) {
    event.preventDefault();
    $("div.player1Box").removeClass("not-active");
    $("div.player2Box").addClass("not-active");
    player1.roll();
    $(".diceRoll1").text(player1.diceRoll);
    $(".turnScore1").text(player1.turnTotal);
    player1.scoreCheck();
    $(".overallScore1").text(player1.overallScore);
  });
  $(".roll2").click(function(event) {
    event.preventDefault();
    $("div.player2Box").removeClass("not-active");
    $("div.player1Box").addClass("not-active");
    player2.roll();
    $(".diceRoll2").text(player2.diceRoll);
    $(".turnScore2").text(player2.turnTotal);
    player2.scoreCheck();
    $(".overallScore2").text(player2.overallScore);
  });

  $(".hold1").click(function(event) {
    event.preventDefault();
    player1.hold();
    player1.scoreCheck();
    $(".overallScore1").text(player1.overallScore);
    player1.diceRoll = 0;
    player1.turnTotal = 0;
    $(".diceRoll1").text(player1.diceRoll);
    $(".turnScore1").text(player1.turnTotal);
    $("div.player1Box").addClass("not-active");
    $("div.player2Box").removeClass("not-active");
  });
  $(".hold2").click(function(event) {
    event.preventDefault();
    player2.hold();
    player2.scoreCheck();
    $(".overallScore2").text(player2.overallScore);
    player2.diceRoll = 0;
    player2.turnTotal = 0;
    $(".diceRoll2").text(player2.diceRoll);
    $(".turnScore2").text(player2.turnTotal);
    $("div.player2Box").addClass("not-active");
    $("div.player1Box").removeClass("not-active");
  });
});



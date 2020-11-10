import $ from "jquery";
import "./css/styles.css";
import "bootstrap";
import Player from "./player.js";

// User Interface Logic ------ >
$(document).ready(function() {
  let player1;
  let player2;
  $("form#diceGame").submit(function(event) {
    event.preventDefault();
    let gamer1 = $("#player1Name").val();
    let gamer2 = $("#player2Name").val();
    // Objects
    player1 = new Player(gamer1);
    player2 = new Player(gamer2);
    $(".player1NameOutput").text(player1.name);
    $(".player2NameOutput").text(player2.name);
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



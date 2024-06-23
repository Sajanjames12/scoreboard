var currentScore1= document.getElementById("score1").innerHTML;
var currentScore2= document.getElementById("score2").innerHTML;
var currentScore1Int = Number(currentScore1)
var currentScore2Int = Number(currentScore2)
function plusOneHome() {
  currentScore1Int += 1 ;
  score1.innerHTML = currentScore1Int ;
}

function plusTwoHome() {
   currentScore1Int += 2 ;
  score1.innerHTML = currentScore1Int ;
}

function plusThreeHome() {
 currentScore1Int += 3 ;
  score1.innerHTML = currentScore1Int ;
}

function plusOneGuest() {
  currentScore2Int += 1 ;
  score2.innerHTML = currentScore2Int ;
}

function plusTwoGuest() {
  currentScore2Int += 2 ;
  score2.innerHTML = currentScore2Int ;
}

function plusThreeGuest() {
  currentScore2Int += 3 ;
  score2.innerHTML = currentScore2Int ;
}

function resetButton() {
  currentScore1Int = 0;
  currentScore2Int = 0;
  score1.innerHTML = 0 ;
  score2.innerHTML = 0;
}

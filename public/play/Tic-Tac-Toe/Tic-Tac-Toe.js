let activatePlayer = "X";
let boxArr = ["", "", "", "", "", "", "", "", ""];
let winner = false;

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    // horizontal
    if (
      boxArr[i + 3 * i] == boxArr[i + 1 + 3 * i] &&
      boxArr[i + 1 + 3 * i] == boxArr[i + 2 + 3 * i] &&
      boxArr[i + 3 * i] != ""
    ) {
      return true;
    }
    // vertical
    if (
      boxArr[i] == boxArr[i + 3] &&
      boxArr[i + 3] == boxArr[i + 6] &&
      boxArr[i] != ""
    ) {
      return true;
    }
  }
  // diagonal
  if (boxArr[0] == boxArr[4] && boxArr[4] == boxArr[8] && boxArr[0] != "") {
    return true;
  }
  if (boxArr[2] == boxArr[4] && boxArr[4] == boxArr[6] && boxArr[2] != "") {
    return true;
  }
  return false;
}

function boxClicked(index) {
  if (!winner) {
    console.log(index);
    if (boxArr[index] == "") {
      boxArr[index] = activatePlayer;
      document.getElementById(`b${index}`).innerHTML = activatePlayer;
    }
    console.log(boxArr);
    if (checkWinner()) {
      document.getElementById("text").innerHTML = `${activatePlayer} won`;
      winner = true;
    } else {
      activatePlayer = activatePlayer == "X" ? "O" : "X";
      document.getElementById("text").innerHTML = `${activatePlayer} turn`;
    }
  }
}

function resetGame() {
  winner = false;
  activatePlayer = "X";
  boxArr = ["", "", "", "", "", "", "", "", ""];
  for (let i = 0; i < 9; i++) {
    document.getElementById(`b${i}`).innerHTML = "";
  }
}

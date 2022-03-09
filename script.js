// Restart Game Button
var restart = document.querySelector("#button")
// Grabs all the squares
var squares = document.getElementsByTagName("td");

// Clear all the square marker
function clearBoard() {
    for (var i = 0; i< squares.length; i++){
        squares[i].textContent = " ";
    }
}

restart.addEventListener("click", clearBoard)
// Check the square marker
function changekMarker() {
    if(this.textContent === "") {
        this.textContent = "X";
    } else if (this.textContent === "X") {
        this.textContent = "O"
    } else {
        this.textContent = ""
    }
}

// For loop to add event Listeners to all squares
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", changekMarker)
}

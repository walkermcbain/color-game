var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classlist.remove("selected");
			modeButtons[1].classlist.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;	
			reset();
		});
	}

	for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
		squares[i].style.background = colors[i];
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
		//grabb color of clicked square
			var clickedColor = this.style.background;
		//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again!!";
			}
		});
	}

	reset();
}



function reset(){
	colors = generateRandomColors(numSquares);
//pick new random from array
	pickedColor = pickColor();
//change colordisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"; 
	messageDisplay.textContent = "";
//change color of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";

}


resetButton.addEventListener("click", function(){
	reset();
 })
 
colorDisplay.textContent = pickedColor;


function changeColors(color){
	//loop throuhg all squares
	for(var i = 0; i < squares.length; i++){
	//change squares to match given color
		squares[i].style.background = color;
	}
	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make array
	var arr = [];
	//add num random colors
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	};
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	//pick a green from 0 to 255
	//pick a blue from 0 to 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256); 
	return "rgb(" + r + ", " + g + ", " + b + ")";
	
}
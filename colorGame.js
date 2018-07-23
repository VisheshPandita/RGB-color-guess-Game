var colors = randomColorPicker(6);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();

var colorDisplay = document.getElementById('colorDisplay');

var messageDisplay = document.querySelector("#message"); 

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
	// initializing colors
	squares[i].style.backgroundColor = colors[i];
	//click response
	squares[i].addEventListener("click", function(){
		//Grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//Compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = 'correct';
			changeColors(clickedColor);
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try  again";
		}
	});
}


function changeColors(color){
	//Loop through all the arrays
	for(var j=0; j<squares.length; j++){
	//Change color of all the squares
			squares[j].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]; 
}

function randomColorPicker(num){
	//add an array
	var arr = [];
	//choose random colors
	for(var k=0; k<= num; k++){
		arr.push(randomColor());
	}
	//return the array
	return arr;
}

function randomColor(){
	//pick red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick green from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick blue from 0-255
	var b = Math.floor(Math.random() * 256);
	// "rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
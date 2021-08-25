var currColor = document.querySelector("h3");
var colorPicker1 = document.querySelector(".color1");
var colorPicker2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right," + colorPicker1.value + ", " + colorPicker2.value + ")";
	currColor.textContent = body.style.background + ";";
}

colorPicker1.addEventListener("input", setGradient);

colorPicker2.addEventListener("input", setGradient);
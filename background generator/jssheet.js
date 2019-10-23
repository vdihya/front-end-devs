var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("grad");

function colorpicker(){
		
		body.style.background = "linear-gradient(to left," + color1.value + "," + color2.value + ")";
css.textContent = body.style.background + ";";
}

color1.addEventListener("input", colorpicker);
color2.addEventListener("input", colorpicker);

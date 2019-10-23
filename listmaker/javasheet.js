var button = document.getElementById("enter");
var input = document.getElementById("userid");
var ul = document.querySelector("ul");

const inputLength= function() {
 return input.value.length;
};

const createElement=()=>{ 
var li = document.createElement("li");
li.appendChild(document.createTextNode(input.value));
var checkbox = document.createElement('input');


checkbox.type = "checkbox";

li.appendChild(checkbox);
ul.appendChild(li);
input.value = "";
};

button.addEventListener("click",function(){console.log("clicked");
if (inputLength() > 0)
	{
	
	 createElement();
}})

input.addEventListener("keypress",function(event) {
if (inputLength()>0 && event.keyCode===13)
	{	
		createElement();
}
})




//get hold of all the HTML elements with the clas of "p1" into an HTMLcollection
var p1 = document.getElementsByClassName("p1");
//console.log(p1);

//this function will change the first HTML element from the above HTMLcollection
function changeText() {
    p1[0].innerHTML = "The text has changed"
}


//bellow example will interact with the HTML canvas element
//reference https://www.w3schools.com/html/html5_canvas.asp
var A = document.getElementById("ID_Name");
var context = A.getContext("2d");

//insert text
context.font = "20px Arial";
context.fillText("Hi there!", 220, 20);
context.strokeText("Fancy text", 200, 240);

//create a gradient background 
var grd = context.createLinearGradient(0, 0, 480, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

context.fillStyle = grd;
context.fillRect(30,30, 440, 190);

// a line from the left top corner to the right bottom corner
context.moveTo(0, 0);
context.lineTo(500, 250);
context.stroke()

//a line from the bottom left corner to the top right corner
context.moveTo(0, 250);
context.lineTo(500, 0);
context.stroke();

// a cicle in the midle
context.beginPath();
context.arc(250, 125, 80, 0, 2 * Math.PI);
context.stroke();



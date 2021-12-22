// WINDOW ALERT POP UP //
//window.alert("This is a pop up, press ok to continue !")

// VARIABLE CONTAINING HTML STRING //
// var x = "<h1>Hey, this is a h1 HTML element</h1><p>paragraph<p>"
// document.write(x)

// STRING CONCATINATION //
var string = "Hello! - \"He said\" -" + " How are you? </br>" // using \ to dysplay the correct character after 
document.write(string) // display the string on the screen 

// MULTIPLE VARIABLES //
var one = "This is a red variable", two = "This is a green variable", three = "This is a blue variable" // define multiple variables on one line of code delimitated by ,
var one = one.fontcolor("red") // assign the red collor to string one
var two = two.fontcolor("green") // assign the green collor to string two
var three = three.fontcolor("blue") // assign the blue collor to string three
document.write(one + "</br>" + two + "</br>" + three + "</br>") // display the concatenated strings on the screen 

// MULTIPLE EXPRESSION DELIMITATED BY , AND A STRING //
document.write(3 + 3 - 3, " and ", 4 * 4, ", are the results of a JavaScript expression </br>") // display the results of the expresion and the string on the screen 

// FUNCTION //
function My_First_Function() {  // define a function and name it
    var str = "This text is green!"; // create a variable and assigne a string to it
    var result = str.fontcolor("green") // use the fontcolor method on the str string
    document.getElementById("Green_Text").innerHTML = result; //find and hold the iner content of the HTML element with id of Green_Text and assign the value of result to it 
}

//HTML events are "things" that happen to HTML elements.
//When JavaScript is used in HTML pages, JavaScript can "react" on these events.

function get_smaller() {
    document.getElementById("mainH1").style.fontSize = "x-large" // decresse the font size by one unit
};

function revert() {
    document.getElementById("mainH1").style.fontSize = "xx-large" // revert the font size to original unit
}

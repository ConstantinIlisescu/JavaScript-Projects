// This function adds two numbers and displays the result within the HTML ellement with id "Math1"
function add_number() {
    var number = 3 + 3;
    document.getElementById("Math1").innerHTML = "The result is : " + number;
}

// This function subtracts two numbers and displays the result within the HTML ellement with id "Math2"
function substract_number() {
    var number = 7 - 3;
    document.getElementById("Math2").innerHTML = "The result is : " + number;
}

// This function multiplyes two numbers and displays the result within the HTML ellement with id "Math3"
function multiply_number() {
    var number = 3 * 3;
    document.getElementById("Math3").innerHTML = "The result is : " + number;
}

// This function divides two numbers and displays the result within the HTML ellement with id "Math4"
function divide_number() {
    var number = 9 / 3;
    document.getElementById("Math4").innerHTML = "The result is : " + number;
}

// This function persforms an complex math operation on multiple numbers and displays the result within the HTML ellement with id "Math5"
function complex_math() {
    var number = (1 + 2) * 3 - (9 / 3) + 5;
    document.getElementById("Math5").innerHTML = "The result is : " + number;
}

// This function divide the first number by the seccond and returns the reminder, displaing it within the HYML ellement with id "Math6"
function modulus_operator() {
    var number = 25 % 6;
    document.getElementById("Math6").innerHTML = "The result is : " + number;
}

// This function transforms the positive number into it's negative number and displays it within the HTML ellement with id "Math7"
function nagation_operator() {
    var number = 30;
    document.getElementById("Math7").innerHTML = "The result is : " + -number;
}

// This function increment the number by 1 and displays it within the HTML ellement with id "Math8"
function increment_operator() {
    var number = 30;
    number++
    document.getElementById("Math8").innerHTML = "The result is : " + number;
}

// This function decrement the number by 1 and displays it within the HTML ellement with id "Math9"
function decrement_operator() {
    var number = 30;
    number--
    document.getElementById("Math9").innerHTML = "The result is : " + number;
}

// This function generates a random number between 0 and 9 and displays it within the HTML ellement with id "Math10"
function random_number() {
    var number = Math.floor(Math.random()* 10)
    document.getElementById("Math10").innerHTML = "The result is : " + number;
}

// This function generates the PI value and displays it within the HTML ellement with ID "Math11"
function PI() {
    document.getElementById("Math11").innerHTML = "The result is : " + Math.PI;
}

// This function rounds the given number by it's lowest integer and displays it within the HTML ellement with id "Math12"
function floor_number() {
    document.getElementById("Math12").innerHTML = "The result is : " + Math.floor(3.232)
}

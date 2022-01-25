//this is an if statement function
function getAge() {
    Age = document.getElementById("Age").value;
    if (Age < 18) {  
    // if the operation returns true, the below mesage gets displayed 
    result = "You are not old enough, come back once you are 18 or older"
    }
    else {
    // if the operation returns false, the below mesage gets displayed 
    result = "Hey, you are 18 or older, live your freedom. "
    }
    document.getElementById("Result").innerHTML = result
}

//Time function
function time_Function() {
    time = new Date().getHours();
    if (time < 12 == time > 0) {
        //if the operation above returns true, the below gets displayed
        result = "Good morning"
    }
    else if (time > 12 == time < 18) {
        //if the operation above returns true, the below gets displayed
        result = "Good afternoon"
    }
    else {
        //in no condition is true, the below gets displayed
        result ="Good evening"
    }
document.getElementById("Time").innerHTML = result
}





//this is a global variable
var Variable = "This is a global variable"


function aFunction() {
    //this is a local variable 
    var Variable = "This is a local variable"
    console.log(Variable);
}

//console.log the local variable value
aFunction();

//consolo.log the global variable value
console.log(Variable);


//this function will return an error
function error() {

    var x = "This is the result"

        //the variable is mispelled
    console.log(xx);

}
error();
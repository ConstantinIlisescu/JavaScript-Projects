//** Part 1 ternary operator**//
function Check_age() {
    var Age, Can_vote; //defining two variables with no values assigned
    // tapping into the element with id of Age and getting the value storred at variable value and assign it to the variable Age inside the function.
    Age = document.getElementById("Age").value;

    // ternary operator - if true, "You are to young" is assigned to var Can_vote. If false, "You are old enough" is assigned to the var Can_vote.
    Can_vote = (Age < 18) ? "You are to young" : "You are old enough";

    // ternary operator - if true, "Come back in..." is assigned to var Can_vote. If false, "Vote wisely" is assigned to the var Can_vote.
    Vote = (Age < 18) ? "Come back in " + (18 - Age) + " year(s)!" : "Vote wisely!"


    document.getElementById("Result").innerHTML = Can_vote + " to vote." + "</br>" + Vote;
}


//** Part 2 object constructor**//

//this is an object constructor
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

//this assigns a new instance of the object by calling the function Vehicle() and by filling the parameters within.
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red")
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black")
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard")

function myFunction() {
    document.getElementById("Keyword_and_Constructor").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + ", manufactured in " + Erik.Vehicle_Year + ".";
}

//** Part 3 Nested function **//

//This is a nested function
function ClickMe() {
    document.getElementById("Nested_Function").innerHTML = Nested();
    function Nested() {
        var x = "This is a nested function";
        return x;
    }
}


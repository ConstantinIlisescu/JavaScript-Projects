
// this function counts from 1 to 10 and contains the while loop and string.lenght method
function count_To_Ten() {
    var Digit = "";
    var Lenght = "";
    var X = 1;

    //this is a while loop
    while (X < 11) {

        //it will execute the below lines of code until the above condition is false
        Digit += "<br>" + X;
        X++;
        //this will assign the current string lenght of variable Digit to variable Lenght
        Lenght = Digit.length;

        //this will print in the console each iteration 
        console.log(Digit);
        console.log(Lenght)

        //the iteration will stop once the condition is false and will move to the next lines
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
    document.getElementById("Lenght").innerHTML = Lenght;
}


// "For Loop" function

//this is an array of strings
var Fruits = ["Banana", "Kiwi", "Peach", "Orange", "Pomelo", "Watermelon"]
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Fruits.length; Y++) {
        Content += Fruits[Y] + "<br>"
    }
    document.getElementById("FruitsList").innerHTML = Content;
    //This will prevent the Fruits list to stack on top of each other if the button is clicked again
    Fruits = [];
}


// Constant
function constant_function() {
    //constant value can't be changed, however we can mutate the value like ading ket value pairs or change the value of any existing pair.
    const list = { item1: "item 1", item2: "item 2", item3: "item 3 " }
    list.item4 = "New added 'Key:Value pair'"
    list.item1 = "Changed value"
    document.getElementById("Constant").innerHTML =
        "This is a constant currently holding a list of key:value pairs." + "<br><br>" +
        " The value of one of the pairs is: '" + list.item2 + "'." + "<br>" +
        " The value of an added pair is: '" + list.item4 + "'." + "<br>" +
        " The value of an changed pair is: '" + list.item1 + "'."
}


// Object including properties and a method
function function1() {
    let user = {
        name: "Costa", // propertie
        country: "UK",
        hobbies: ["learn and write code", "ride the bike outside of town", "listen to chillout mussic"],
        description: // method
            function () { return "Hi, my name is " + this.name + ".<br>My hobbies are : " + this.hobbies[0] + ", " + this.hobbies[1] + " and " + this.hobbies[2] + "." }
    }
    document.getElementById("Object1").innerHTML = user.description();
}



// This function creates a dictionary using multiple key values pairs and displays the values within a HTML value with id "Dictionary".
function my_dictionary() {
    var car = { //define the variable car
        Make :"Audi", //assign value Audi to Key Make
        Model: "A7", //assign value A7 to Key Model
        Year: 2018, //assign value 2018 to Key Year
        Engine: "Petrol", //assign value Petrol to Key Engine
    };
    delete car.Engine // delete the key value pair Engine:"Petrol from the dictionary"
    // Display the new string into the HTML ellement with id "Dictionary"
    document.getElementById("Dictionary").innerHTML = "This car is an " + car.Make + " " +
        car.Model + " from " + car.Year + "." + "<br> The engine is <b>" + car.Engine + "</b> because the value was deleted.";


}
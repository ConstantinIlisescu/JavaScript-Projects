//concatination function
function concat_Function() {
    //this function combines all the below strngs into a single concatenated string.
    var name1 = "This is "
    var name2 = "a concatenated "
    var name3 = " string."
    var name4 = " Nice :)"
    // it uses the string .concat() method
    var nameAll = name1.concat(name2, name3, name4)
    document.getElementById("Concatination").innerHTML = nameAll
}

//slice function
function slice_Function() {
    //this function cuts a part of the string based on the parameters given
    var text1 = "This is the original string"
    var text2 = text1.slice(0, 7)

    document.getElementById("Slice").innerHTML = text1.concat(". And this is the sliced string: ", "'   ", text2, "'")
}

//toUpperCase function
function toUpper_Case() {
    var text1 = "This sentence is now all upper case!"
    // the below toUpperCase() method transforms the string to upper case
    var text2 = text1.toUpperCase()

    document.getElementById("toUpperCaseMethod").innerHTML = text2
}

//search function
function search_Method() {
    var text1 = "Please locate where 'locate' occurs!"
    //.search() method locates the parameter given and returns the index where the given parameter first occures. 
    document.getElementById("searchMethod").innerHTML = "The word 'locate' first occurs starting at index : " + text1.search("locate")
}

//toString function
function change_toString() {
    var inputValue = document.getElementById("input1").value
    var convertedInput = inputValue.toString()

    document.getElementById("result1").innerHTML = "The convenrted value is : " + convertedInput + ", and is a data type of : " + typeof(convertedInput)
}


//toPrecision function
function toPrecision_Function() {

let num = 0.001658853;

    document.getElementById("demo").innerHTML =
    "The original number is : " + num + "<br>" +
    "Precision of 2 : " + num.toPrecision(2) + "<br>" +
    "Precision of 3 : " + num.toPrecision(3) + "<br>" +
    "Precision of 10 : " + num.toPrecision(10);

}
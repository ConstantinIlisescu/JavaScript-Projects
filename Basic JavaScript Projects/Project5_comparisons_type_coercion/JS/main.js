// var name1 = "..."
// document.write(typeof name1) // this will display the DATA TYPE of the passed variable.  

// console.log(2 + 2); // returns 4 in the console
// console.log(5 > 6); // returns False in the console
// console.log(5 < 6); // returns True in the console


function my_Function() {
    document.getElementById("Test").innerHTML = "0/0 = " + 0 / 0; // returns NaN because 0 can't be divided by 0

    document.getElementById("Test1").innerHTML = "Is \"string\" not a number ? - " + isNaN("Coste"); // returns True because string is not a number

    document.getElementById("Test2").innerHTML = "Is \"007\" not a number? - " + isNaN("007"); //retunrs False because the string of numbers could be transform in integers and is not "not a number"

    document.getElementById("Test3").innerHTML = "2E310, 2 at power of 310 = " + 2E310; // returns infinity

    document.getElementById("Test4").innerHTML = "-2E310, -2 at power of 310 = " + -2E310; // returns -infinity

    document.getElementById("Test5").innerHTML = "(6 > 2 && 23 <= 30) will return = " + (6 > 2 && 23 <= 30); // returns True because both operations are True

    document.getElementById("Test6").innerHTML = "(6 < 2 && 23 >= 30) will return = " + (6 > 2 && 23 >= 30); // returns False beacause one of the operations are not True

    document.getElementById("Test7").innerHTML = "JavaScript uses type coercion so the string \"10\" + integer 5 would return = " + "10" + 5 + " - and is a " + typeof ("10" + 5) + " data type"; // returns the string "105"

    document.getElementById("Test8").innerHTML = "(10 + 5) == 15 will return - " + ((10 + 5) == 15) + " ." // compares the two data and returns true in this case

    document.getElementById("Test9").innerHTML = "(10 + 5) == 10 will return - " + ((10 + 5) == 10) + " ."  // compares the two data and returns false in this case

    // Return true by ensuring to match the data type and value.
    document.getElementById("Test10").innerHTML = " 5 === 5 returns - " + (5 === 5) + " - because both VALUE and DATA TYPE are matched by the === sign." // compares both VALUE and TYPE and returs true in this case

    // Return false by writing a different data type and different value.
    document.getElementById("Test11").innerHTML = " 54 === \"fiftyfour\" returns - " + (54 === "fiftyfour") + " - because both VALUE and DATA TYPE are not matched by the === sign."// compares both VALUE and TYPE and returs false in this case

    // Return false by writing a different data type but the same value for both.
    document.getElementById("Test12").innerHTML = " 60 === \"60\" returns - " + (60 === "60") + " - because the DATE TYPE is not matched by the === sign, only the VALUE."// compares both VALUE and TYPE and returs false in this case

    // Return false by writing the same data type but a different value for both.
    document.getElementById("Test13").innerHTML = " 24 === 25 returns - " + (24 === 25) + " - because the VALUE is not matched by the === sign, only the DATA TYPE."// compares both VALUE and TYPE and returs false in this case

    document.getElementById("Test14").innerHTML = "(17 === 17 && 16 == \"16\") - will return - " + (17 === 17 && 16 == "16") + " - because both operations returns true, and are compared by &&(AND) boolean comparation operator. " // returns true because both operations returns true

    document.getElementById("Test15").innerHTML = "(17 === 17 || 16 === 12) - will return - " + (17 === 17 || 16 === 12 ) + " - because at least one operation returns true, these are compared by ||(OR) boolean comparation operator. " // returns true because at leat one operation returns true

    document.getElementById("Test16").innerHTML = "(17 === 14 || 16 === 12) - will return - " + (17 === 14 || 16 === 12) + " - because no operation returns true, these are compared by ||(OR) boolean comparation operator. " // returns false because no operation returns true

    document.getElementById("Test17").innerHTML = "!(5 > 10) will return - " + !(5 > 10) + " - because the !(NOT) operator returns true when the returned value is false." // returns true because the returned value is false.

    document.getElementById("Test18").innerHTML = "!(5 < 10) will return - " + !(5 < 10) + " - because the !(NOT) operator returns false when the returned value is true." // returns false because the returned value is true. 

}


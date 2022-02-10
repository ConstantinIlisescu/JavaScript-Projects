function validateForm() {
    var fname = document.forms["myForm"]["firstname"].value;
    var lname = document.forms["myForm"]["lastname"].value;
    var pet = document.forms["myForm"]["fav_pet"].value;
    if (fname == "") {
        alert("First Name must be filled out");
        return false;
    } else if (lname == "") {
        alert("Last Name must be filled out");
        return false;
    } else if (pet == "") {
        alert("Please chose your favourite pet");
        return false;
    }
};
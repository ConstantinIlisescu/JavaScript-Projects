function car_select() {
    var car;
    var carSelect = document.getElementById("ID1").value;
    var text1 = " is a great choise!"
    switch (carSelect) {
        case "VW":
            car = "VW" + text1;
            break
        case "BMW":
            car = "BMW" + text1;
            break
        case "Audi":
            car = "Audi" + text1;
            break
        case "Jaguar":
            car = "Jaguar" + text1;
            break
        default:
            car = "Please enter your choise exactly as shown in the above list.";
    }
    document.getElementById("ID2").innerHTML = car;
}
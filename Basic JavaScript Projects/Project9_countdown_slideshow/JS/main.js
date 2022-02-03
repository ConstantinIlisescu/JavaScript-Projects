//Count down function//
function countDown() {
    //stores the value enterd by the user in variable seconds
    seconds = document.getElementById("seconds").value;

    function count() {
        //the new value of secconds is the result of the curent value - 1
        seconds = seconds - 1;
        // the HTML element with ID of timer will display the current value of the variable seconds 
        timer.innerHTML = seconds;
        //the the count will pouse of 1000 milliseconds 
        setTimeout(count, 1000)

        //when the value of secconds will be smaller than 0 the HTML ellement with Id of timer will display the string value
        if (seconds < 0) {
            timer.innerHTML = "Time's up!"
        }
    }

    //the function gets called and the function starts again
    count();

}



// Slide show functions //



// the main function
function showSlides(n) {
    //this is empty at this point, to ve used later on
    var i;

    // this variable will contain the three div elements with class mySlide
    var slides = document.getElementsByClassName("mySlides");

    //this variable will contain the three span elements with class of dot
    var dots = document.getElementsByClassName("dot");

    //if the argument passed when the function is called is grater than the number of pictures, then the slide will go back to the first picture
    if (n > slides.length) { slideIndex = 1 }

    //if the argument passed when the function is called is less than 1, then the slide will go back at the end of the slides
    if (n < 1) { slideIndex = slides.length }

    // loop through the slides and set the style.display rpoperty to none / hide the slide elements
    for (i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }

    // loop through the dot elements and replace the class active with nothing/ empty class 
    for (i = 0; i < dots.length; i++) { dots[i].className = dots[i].className.replace(" active", ""); }

    // set the slide element at curent index -1 to be visible
    slides[slideIndex - 1].style.display = "block";

    //set the dot element at current index -1 to have a class of active
    dots[slideIndex - 1].className += " active";
}


//defines where the slide starts
var slideIndex = 1;

// displays the given number slide 
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}


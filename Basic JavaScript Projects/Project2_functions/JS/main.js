function new_text() { //define the function new_text()
    var text = "...you are not listening!" //create and assign a string to variable text
    text += " Aren't you?" // concatenate a new string to the string already assigned to variable text 
document.getElementById("paragraph").innerText = text // change the html iner text with the new text
}

function My_First_Function() {
    var greeting = "Hello, welcome to my JavaScript project!";// creates variable
    var name = "Muhammad";// specify my name

    document.getElementById("Greeting").innerHTML = greeting + " My name is " + name + "."; // put the variables data into the inner html of the element containing id "Greeting"
}// end of My_first_function()

function Review() {
    var sentence = 'I am learning a lot';// create a variable
    sentence += ' from this course';// add this line to the existing variable using the += operator

    document.getElementById("hidden_sentence").innerHTML=sentence; // return the sentence with additional line added to the end to display it in the element containing the id hidden_sentence
}// end of the Review() function

// function with operator "+"
function addition_function(){
    var addition=2+2;
    document.getElementById('Math').innerHTML= '2+2='+addition;
}
// function with operator "-"
function subtraction_function(){
    var subtraction=5-2;
    document.getElementById('Mathsub').innerHTML= '5-2='+subtraction;
}
// function with operator "*"
function multiplication(){
    var multiply= 6*8;
    document.getElementById('multiply').innerHTML= '6*8=' + multiply;
}
// function with operator "/"
function division(){
    var divide= 48/6;
    document.getElementById('divided').innerHTML= '48/6=' + divide;
}
// function with simple math
function more_Math(){
    var simple_math= (1+2)*10/2-5;
    document.getElementById('simple').innerHTML= "1 plus 2, multiplied by 10 and divided in half and then subtracted by 5 equals" + simple_math;
}
// function with modulus operator 
function modulus_operator(){
    var simple_modulus= 25%6;
    document.getElementById("modulus").innerHTML= "when you divide 25 by 6 you have a remainder of: "+ simple_modulus;
}
// function with negative value
function negative_operator(){
    var value=10;
    document.getElementById("negative").innerHTML=-value;
}
// increment operator "++"
var x=5;
x++;
document.write(x+ "is the increment \n");

// decrement with operator "--"
var y=5.25;
y--;
document.write(y);
// utilizing Math.random
window.alert(Math.random());

// Use the Math.sqrt() method to find the square root of 25
var result = Math.sqrt(25);

// Display the result on the webpage
document.write("\n The square root of 25 is: " + result);
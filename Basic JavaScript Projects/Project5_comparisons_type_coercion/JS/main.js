document.write(typeof "5"); //write the type of 5

document.write("10" + 5); // write the output after adding 5 after 10 as 105
 
//fuction that show if the value is a number or not
function my_function(){
    document.getElementById('test').innerHTML=0/0;
    document.getElementById('test1').innerHTML= isNaN('this is a string');
    document.getElementById('test2').innerHTML= isNaN('007');
}

// show the output as infinity
document.write(2E310);
//show the output as negative infinity
document.write(-2E310);

// show the answer as true for the statement
document.write(10>2);
// show the answer as false for the statement
document.write(10<2);

//write the answer of caclculation in the console section of the browser
console.log(2+2);
//write the output as false in the console section of the browser
console.log(10>20);
//check if the values are equal or not and write output as is true of false
document.write(10==10);
document.write(3==11);

//assigning variables
A=10;
B=10;
C=82;
D='82';
E='Magnum';
F='Magnum';
//checking if the value and type are same and show output as true or false
document.write(A===B);
document.write(C===D);
document.write(E===F);

//utilizing the AND and OR operator to show the values as true or false
document.write(5>2 && 10>4);
document.write(5>10 && 10>4);
document.write(5>10 || 10>4);
document.write(5>10 || 10>20);
//function that show the oposite of the answer by using the NOT operator
function not_function(){
    document.getElementById('Not').innerHTML=!(20>10);
    document.getElementById('Not2').innerHTML=!(20<10);
}
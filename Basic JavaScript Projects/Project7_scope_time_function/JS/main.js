// Global variable
var globalVariable = "This is a global variable";

// Function with a local variable
function myFunction() {
    var localVariable = "This is a local variable";

    console.log(globalVariable);
    console.log(localVariable);

    // Intentional error for debugging
    console.log(nonExistentVariable);
}

// Call the function
myFunction();

function checkTime() {
    var hour = new Date().getHours();

    if (hour < 12) {
        document.getElementById("Greeting").innerHTML = "Good morning!";
    } else {
        document.getElementById("Greeting").innerHTML = "Good afternoon!";
    }
}

//function to calculate the time of day
function Time_function(){
    var time=new Date().getHours();
    var Reply;
    if(time<12 == time>0){
        Reply="It is morning time!";
    }
    else if(time>=12 == time<18){
        Reply="It is afernoon time!";
    }
    else{
        Reply= "It is evening time";
    }
    document.getElementById('Time_of_Day').innerHTML=Reply;
}
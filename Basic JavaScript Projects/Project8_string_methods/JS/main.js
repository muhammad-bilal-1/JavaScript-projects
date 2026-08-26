//function to concatinate 4 different strings to one sentence
function fullsentence(){
    var part1= "I have ";
    var part2= "made this ";
    var part3= "into a complete     ";
    var part4= "sentence";
    var wholesentence= part1.concat(part2,part3,part4);
    document.getElementById('concatenate').innerHTML=wholesentence;

}
//function to seperate a slice of string
function slice_method(){
    var sentence="All work and no play makes johnny a dull boy";
    var section=sentence.slice(27,33);
    document.getElementById('slice').innerHTML=section;
}
//function to change the data typr to string
function String_method(){
    var X= 182;
    document.getElementById("Number_To_String").innerHTML=X.toString();
}
//function to change the length of a string
function precision_method(){
    var X= 12938.3012987376112;
    document.getElementById('Precision').innerHTML=X.toPrecision(10);
}
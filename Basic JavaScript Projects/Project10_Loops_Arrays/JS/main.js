//While loop
function count_to_ten(){
    var value="";
    var X=1;
    while (X<11){
        value += " "+X;
        X++;
    }
    document.getElementById("count_to_ten").innerHTML=value;
}

//for loop
var instruments =[
    "Guitar",
    "Drums",
    "Piano",
    "Bass",
    "Violin",
    "Trumpet",
    "Flute",
];
var content="";
var y;
function For_loop(){
    for(y=0;y<instruments.length;y++){
        content += instruments[y]+"<br>";
    }
    document.getElementById("For_loop").innerHTML=content;
}


//Array
function color_array(){
    var Color=[];
    Color[1]="Green";
    Color[2]="Red";
    Color[3]="Blue";
    Color[4]="Yellow";
    Color[5]="Orange";
    Color[6]="Purple";
    document.getElementById('color_array').innerHTML="My favorite color is "+ Color[6]+".";
}

//Let keyword
function car(){
    let car={
        make: "Nissan",
        year: "2023",
        color: "Black",
    };
    document.getElementById("car").innerHTML= "I have a "+car.year+ " "+car.color+ " "+ car.make+ ".";
}
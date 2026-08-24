function Ride_Function(){
    var Height, Can_ride;
    Height= document.getElementById('Height').value;
    Can_ride= (Height<52)?"You are too short":"You are tall enough";
    document.getElementById('Ride').innerHTML=Can_ride+' to ride';
}

function Vote_Function(){
    var Age, Can_vote;
    Age= document.getElementById('Age').value;
    Can_vote= (Age<18)?"You are too young":"You are old enough";
    document.getElementById('Vote').innerHTML=Can_vote+' to ride';
}

function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack = new Vehicle('Dodge','Viper',2020,'Red');
var Emily= new Vehicle('Jeep', 'Trail Hawk', 2019, 'White and Black');
var Erick= new Vehicle('Ford', 'Pinto', 1971, 'Mustard');
function my_function(){
    document.getElementById("Keywords_and_constructors").innerHTML="Erick drives a "+ Erick.Vehicle_Color+' -colored '+Erick.Vehicle_Model+'manufactured in '+Erick.Vehicle_Year;
}

function my_functionnew(){
    document.getElementById("New_and_This").innerHTML="Emily drives a "+ Emily.Vehicle_Color+' -colored '+Emily.Vehicle_Model+'manufactured in '+Emily.Vehicle_Year;
}

function count_function(){
    document.getElementById('Counting').innerHTML=Count();
    function Count(){
        var Starting_point=9;
        function Plus_one(){
            Starting_point+=1;
        }
        Plus_one();
        return Starting_point;
    }
}


// Function with dictionary_items and show output
function show_dictionary() {
    var Dictionary_items = {
        name: "Muhammad Bilal",
        profession: "Web Developer",
        language: "JavaScript",
        experience: "5 years"
    };// specifying the dictionary value with keys
    delete Dictionary_items.name;// deleting dictionary item using delete method
    //showing output with undefined deleted key item and showed output undefined
    document.getElementById('dictionary').innerHTML= "My name is: "+Dictionary_items.name;

}
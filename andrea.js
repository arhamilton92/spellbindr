//VARIABLES
var queryURL = "https://www.dnd5eapi.co/api/";
var magicSchoolsURL = "https://www.dnd5eapi.co/api/magic-schools";
var equipmentURL = "https://www.dnd5eapi.co/api/equipment/"
var spellsURL = "https://www.dnd5eapi.co/api/spells/"

var pickupLineURL = "http://pebble-pickup.herokuapp.com/tweets/random"

var magicSchool = "";
var equipment = "";
var index = "";
var index2 = "";
var spell1 = "";
var spell2 = "";
var equipment1 = "";
var equipment2 = "";

var firstnameArray = [
    "Oloril", "Sharry", "Fruamros", "Graamros", "Beleak", "Kevben", "Gandalf", "Dumbledore", "Harry", 
    "Mervin", "Thicket", "Ruben", "Aedan", "Sorrel", "Wylie", "Briar", "Talon", "Ruben", "Gust", "Barney", 
    "Leroy", "Fennel", "Quartz", "Wren", "Carnelian",
]
var lastnameArray = ["Buttonwood", "Horn", "Cork", "Striker", "Drake", "Buttonwood", "Roc", "Rooks", "Firethron", 
    "Bovin", "Owler", "Juniper", "Raywood", "Foxglove", "Bells", "Snakebark", "Aurora", "Flame", "Fogs", 
    "Tadpole", "Talpin", "Gorgon", "Owler", "Fiddlewood", "Locks", "Pegas", "Fluke", "Spindle", "Lambkins",
    "Swordhand",  "Fletcher",  "Pegason",  "Loyalar",  "Chorster",  "Urthadar"
]

//TEMPORARY
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
})

$.ajax({
    url: pickupLineURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
})
//

//FUNCTION DEFINITIONS
function generateName() {
    // console.log("generateName")
    firstName = firstnameArray[Math.floor(Math.random() * firstnameArray.length)];
    lastName = lastnameArray[Math.floor(Math.random() * lastnameArray.length)];

    generateStats();

    console.log(firstName, lastName);
    $("#user-stats").append(firstName);

}

function generateStats() {
    // console.log("generateStats")
    $.ajax({
        url: magicSchoolsURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    index = Math.floor(Math.random() * 8)
    magicSchool = response.results[index].name;
        
        $.ajax({
            url: equipmentURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
        index = Math.floor(Math.random() * 231)
        index2 = Math.floor(Math.random() * 231)
        equipment1 = response.results[index].name;
        equipment2 = response.results[index2].name;
        })
            
            $.ajax({
                url: spellsURL,
                method: "GET"
            }).then(function(response) {
                console.log(response);
            index = Math.floor(Math.random() * 318)
            index2 = Math.floor(Math.random() * 318)
            spell1 = response.results[index].name;
            spell2 = response.results[index2].name;
            generateCharacter();
            })

    })
}

function generateCharacter() {
    console.log(firstName, lastName);
    console.log("Magic school: " + magicSchool);
    console.log("equipment:");
    console.log(equipment1);
    console.log(equipment2);
    console.log("spells:");
    console.log(spell1);
    console.log(spell2);
}


//FUNCTION CALLS
generateName();

// generateName();
// generateStats();


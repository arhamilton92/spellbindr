queryURL = "https://www.dnd5eapi.co/api/";
magicSchoolsURL = "https://www.dnd5eapi.co/api/magic-schools";
pickupLineURL = "http://pebble-pickup.herokuapp.com/tweets/random"

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

function generateName() {
    firstName = firstnameArray[Math.floor(Math.random() * firstnameArray.length)];
    lastName = lastnameArray[Math.floor(Math.random() * lastnameArray.length)];
    console.log(firstName, lastName);
}

function generateStats() {
    $.ajax({
        url: magicSchoolsURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    })

}

generateName();
generateStats();
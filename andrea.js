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
    "Leroy", "Fennel", "Quartz", "Wren", "Carnelian"
]
var lastnameArray = ["Buttonwood", "Horn", "Cork", "Striker", "Drake", "Buttonwood", "Roc", "Rooks", "Firethron", 
    "Bovin", "Owler", "Juniper", "Raywood", "Foxglove", "Bells", "Snakebark", "Aurora", "Flame", "Fogs", 
    "Tadpole", "Talpin", "Gorgon", "Owler", "Fiddlewood", "Locks", "Pegas", "Fluke", "Spindle", "Lambkins",
    "Swordhand",  "Fletcher",  "Pegason",  "Loyalar",  "Chorster",  "Urthadar"
]

//on.click functions
$("#start-button").click(function(){
    console.log("You clicked start!");
    $("#home-page").empty();
    
    generateCharacter()
})

$("#new-button").click(function(){
    console.log("You clicked new character!")
    $("#user-stats").empty();
    generateCharacter()
})



//TEMPORARY
$.ajax({
    url: queryURL,
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
    
    console.log(firstName, lastName);

    generateStats();
    
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
    generatePickupLine();

    var character = generateCharacter()


    $("#user-stats").append(character);
}

function generatePickupLine() {
    $.ajax({
        url: pickupLineURL,
        method: "GET"
    }).then(function(response) {
        console.log(response.tweet)
    })
}

//FUNCTION CALLS



//When I visit the page 
//then I am presented with a roll button to create my character
    //SpellBindr logo, brief description, and start button 
    //On click, page is wiped and first character profile is created
  
        
//when a character is created
    //pulls from D&D api for random stats and classes
    //pulled data will be appended to to page
//then I can reroll for a new random profile
    //reroll button clears previous stats and generates new
    // $("#new-button").click(function(){
    //     console.log("You clicked new character!")
    //     $("#user-stats").empty();
    //     generateName();
    //     generateStats();
    // })
//when I am happy with the character stats created
//then I can save that character to local storage
//when I save the character
//then I am brought to the gameplay page
    //play game button saves character and moves to play page
//when I arrive at the gameplay page
//then I am shown an eligible wizard
    //on page load, populate element with random wizard image and name and D&D api to generate stats
        //pull image and name from arrays
//when I see a wizard
//then I can press the roll initiative or flee buttons
    //roll initiative button moves to next step
    //flee button rerolls wizard stats, image, and name
//when I press the like button
//then I roll for match
    //when I successfully roll to match
    //then I am presented with a random pickup line and the wizard is saved to my matches and a new wizard is generated
        //appends saved wizard profile to screen
    //when I unsuccessfully roll to match
    //then a new wizard is generated
//when I select a wizard from my saved matches
    //Header with directions to click new saved card to send a pickup line
//then I can send him a pickup line
    
//when the pickup line is sent
//then I roll charisma to go on a dungeon date
//when the dungeon date is successful
//then the wizard joins my party and is removed from saved matches





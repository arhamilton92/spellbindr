$(document).ready(function () {
  //VARIABLES
  var queryURL = "https://www.dnd5eapi.co/api/";
  var magicSchoolsURL = "https://www.dnd5eapi.co/api/magic-schools";
  var equipmentURL = "https://www.dnd5eapi.co/api/equipment/";
  var spellsURL = "https://www.dnd5eapi.co/api/spells/";
  var pickupLineURL = "http://pebble-pickup.herokuapp.com/tweets/random";
  var magicSchool = "";
  var index = "";
  var index2 = "";
  var spell1 = "";
  var spell2 = "";
  var equipment1 = "";
  var equipment2 = "";
  var firstnameArray = [
    "Oloril",
    "Sharry",
    "Fruamros",
    "Graamros",
    "Beleak",
    "Kevben",
    "Gandalf",
    "Dumbledore",
    "Harry",
    "Mervin",
    "Thicket",
    "Ruben",
    "Aedan",
    "Sorrel",
    "Wylie",
    "Briar",
    "Talon",
    "Ruben",
    "Gust",
    "Barney",
    "Leroy",
    "Fennel",
    "Quartz",
    "Wren",
    "Carnelian",
  ];
  var lastnameArray = [
    "Buttonwood",
    "Horn",
    "Cork",
    "Striker",
    "Drake",
    "Buttonwood",
    "Roc",
    "Rooks",
    "Firethron",
    "Bovin",
    "Owler",
    "Juniper",
    "Raywood",
    "Foxglove",
    "Bells",
    "Snakebark",
    "Aurora",
    "Flame",
    "Fogs",
    "Tadpole",
    "Talpin",
    "Gorgon",
    "Owler",
    "Fiddlewood",
    "Locks",
    "Pegas",
    "Fluke",
    "Spindle",
    "Lambkins",
    "Swordhand",
    "Fletcher",
    "Pegason",
    "Loyalar",
    "Chorster",
    "Urthadar",
  ];
  //on.click functions
  $("#start-button").click(function () {
    console.log("You clicked start!");
    $("#home-page").empty();
    generateName();
  });
  $("#new-button").click(function () {
    console.log("You clicked new character!");
    $("#user-stats").empty();
    generateName();
  });
  //TEMPORARY
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
  //
  //FUNCTION DEFINITIONS
  function generateName() {
    // console.log("generateName")
    firstName =
      firstnameArray[Math.floor(Math.random() * firstnameArray.length)];
    lastName = lastnameArray[Math.floor(Math.random() * lastnameArray.length)];

    console.log(firstName, lastName);
    generateStats();
  }
  function generateStats() {
    // console.log("generateStats")
    $.ajax({
      url: magicSchoolsURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      index = Math.floor(Math.random() * 8);
      magicSchool = response.results[index].name;

      $.ajax({
        url: equipmentURL,
        method: "GET",
      }).then(function (response) {
        console.log(response);
        index = Math.floor(Math.random() * 231);
        index2 = Math.floor(Math.random() * 231);
        equipment1 = response.results[index].name;
        equipment2 = response.results[index2].name;
      });

      $.ajax({
        url: spellsURL,
        method: "GET",
      }).then(function (response) {
        console.log(response);
        index = Math.floor(Math.random() * 318);
        index2 = Math.floor(Math.random() * 318);
        spell1 = response.results[index].name;
        spell2 = response.results[index2].name;
        generateCharacter();
      });
    });
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
    var nameDiv = $("<h4>").text(firstName + " " + lastName);
    var magicDiv = $("<div>").text("magic school: " + magicSchool);
    var equipmentDiv = $("<div>").text("Equipment:");
    var equip1El = $("<div>").text(equipment1);
    var equip2El = $("<div>").text(equipment2);
    equipmentDiv.append(equip1El, equip2El);
    var spellDiv = $("<div>").text("Spells:");
    var spell1El = $("<div>").text(spell1);
    var spell2El = $("<div>").text(spell2);
    spellDiv.append(spell1El, spell2El);

    $("#user-stats").append(nameDiv, magicDiv, equipmentDiv, spellDiv);
  }
  function generatePickupLine() {
    $.ajax({
      url: pickupLineURL,
      method: "GET",
    }).then(function (response) {
      console.log(response.tweet);
    });
  }
  //FUNCTION CALLS
});

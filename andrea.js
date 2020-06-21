
$(document).ready(function () {
    //VARIABLES
    var dndURL = "https://www.dnd5eapi.co/api/";
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

    var firstnameArray = ["Oloril", "Sharry", "Fruamros", "Graamros", "Beleak", "Kevben", "Gandalf", "Dumbledore", "Harry", "Mervin",
        "Thicket", "Ruben", "Aedan", "Sorrel", "Wylie", "Briar", "Talon", "Ruben", "Gust", "Barney", "Leroy", "Fennel", "Quartz", "Wren",
        "Carnelian", "George", , "Tim", "Kevin",
    ];
    var lastnameArray = ["Buttonwood", "Horn", "Cork", "Striker", "Drake", "Buttonwood", "Roc", "Rooks", "Firethron", "Bovin", "Owler",
        "Juniper", "Raywood", "Foxglove", "Bells", "Snakebark", "Aurora", "Flame", "Fogs", "Tadpole", "Talpin", "Gorgon", "Owler",
        "Fiddlewood", "Locks", "Pegas", "Fluke", "Spindle", "Lambkins", "Swordhand", "Fletcher", "Pegason", "Loyalar", "Chorster", "Urthadar",
    ];
    var imagearray = ["./assets/Wizard Photos/image (1).png", "./assets/Wizard Photos/image (2).png", "./assets/Wizard Photos/image (3).png",
        "./assets/Wizard Photos/image (4).png", "./assets/Wizard Photos/image (5).png", "./assets/Wizard Photos/image (6).png",
        "./assets/Wizard Photos/image (7).png", "./assets/Wizard Photos/image (8).png", "./assets/Wizard Photos/image (9).png",
        "./assets/Wizard Photos/image (10).png", "./assets/Wizard Photos/image (11).png", "./assets/Wizard Photos/image (12).png",
        "./assets/Wizard Photos/image (13).png", "./assets/Wizard Photos/image (14).png", "./assets/Wizard Photos/image (15).png",
        "./assets/Wizard Photos/image (16).png", "./assets/Wizard Photos/image (17).png", "./assets/Wizard Photos/image (18).png",
        "./assets/Wizard Photos/image (19).png", "./assets/Wizard Photos/image (20).png", "./assets/Wizard Photos/image (21).png",
        "./assets/Wizard Photos/image (22).png", "./assets/Wizard Photos/image (23).png", "./assets/Wizard Photos/image (24).png"
    ]

    //FUNCTION DEFINITIONS
    function getName() {
        firstName = firstnameArray[Math.floor(Math.random() * firstnameArray.length)];
        lastName = lastnameArray[Math.floor(Math.random() * lastnameArray.length)];
    }

    function getStats() {
        $.ajax({
            url: magicSchoolsURL,
            method: "GET",
        }).then(function (response) {
            index = Math.floor(Math.random() * 8);
            magicSchool = response.results[index].name;

            $.ajax({
                url: equipmentURL,
                method: "GET",
            }).then(function (response) {
                index = Math.floor(Math.random() * 231);
                index2 = Math.floor(Math.random() * 231);
                equipment1 = response.results[index].name;
                equipment2 = response.results[index2].name;
            });

            $.ajax({
                url: spellsURL,
                method: "GET",
            }).then(function (response) {
                index = Math.floor(Math.random() * 318);
                index2 = Math.floor(Math.random() * 318);
                spell1 = response.results[index].name;
                spell2 = response.results[index2].name;
            });
        });
    }

    function generateCharacter() {
        //uses character info to create and append elements to page
        var nameDiv = $("<h4>").text(firstName + " " + lastName);
        var magicDiv = $("<div>").text("Magic school: " + magicSchool);
        var equipmentDiv = $("<div>").text("Equipment: ");
        var equip1El = $("<span>").text(equipment1);
        var equip2El = $("<span>").text(equipment2);
        equipmentDiv.append(equip1El, equip2El);
        var spellDiv = $("<div>").text("Spells: ");
        var spell1El = $("<span>").text(spell1);
        var spell2El = $("<span>").text(spell2);
        spellDiv.append(spell1El, spell2El);
        $("#user-stats").append(nameDiv, magicDiv, equipmentDiv, spellDiv);
    }



    function getPickupLine() {
        $.ajax({
            url: pickupLineURL,
            method: "GET",
        }).then(function (response) {
            console.log(response.tweet);
        });
    }

    function hideStart() {
        $("#play-button").attr("style", "display: none");
    }

    function generateImage() {
        $("#user-image").empty();
        var imageLength = imagearray.length;
        var randomimage = Math.floor(Math.random() * imageLength);
        var imgDiv = $("<div>");
        var image = $("<img>").attr("style", "max-width: 400px");
        image.attr("src", imagearray[randomimage]);
        imgDiv.append(image);
        $("#user-image").prepend(imgDiv);
    }

    //FUNCTION CALLS
    hideStart();

    //new character button from welcome page to generate new character and display random attributes and image
    $("#new-button").click(function () {
        $("#user-stats").empty();
        $("#play-button").attr("style", "display: initial");
        //get functions retrieve character info. generate function appends to page.
        getName();
        getStats();
        getPickupLine();
        generateImage();
        generateCharacter();
    });

    //play game button to go to next page and save character to local
    $("#play-button").click(function () {
        $("#user-page").empty()
        $("#game-page").attr("style", "display: block")
        $("#save-page").attr("style", "display: block")
        $("#dungeon-date").attr("style", "display: block")
        //get functions retrieve character info. generate function appends to page.
        getName();
        getStats();
        getPickupLine();
        generateImage();
        generateCharacter();
    })

    //Flee button
    $("#flee-button").click(function () {
        console.log("you coward!")
        $("#user-stats").empty();
        //get functions retrieve character info. generate functions appends to page.
        getName();
        getStats();
        getPickupLine();
        generateImage();
        generateCharacter();
    })

    //Yes button
    $("#yes-button").click(function () {
        console.log("He said YES!!")
    })
})
$(document).ready(function () {
    //VARIABLES
    var dndURL = "https://www.dnd5eapi.co/api/";
    var magicSchoolsURL = "https://www.dnd5eapi.co/api/magic-schools";
    var equipmentURL = "https://www.dnd5eapi.co/api/equipment/";
    var spellsURL = "https://www.dnd5eapi.co/api/spells/";
    var pickupLineURL = "https://pebble-pickup.herokuapp.com/tweets/random";

    var magicSchool = "";
    var index = "";
    var index2 = "";
    var spell1 = "";
    var spell2 = "";
    var equipment1 = "";
    var equipment2 = "";
    var randomNumber = "0";

    var nameDiv = "";
    var magicDiv = "";
    var equipmentDiv = "";
    var equip1El = "";
    var equip2El = "";
    var spellDiv = "";
    var spell1El = "";
    var spell2El = "";
    var pickupResponse = "";
    var pickupEl = "";
    var partyNumber = "0";
    var numberOfMembers = "0";

    var savedWizardImage = "";
    var savedWizardFirstName = "";
    var savedWizardLastName = "";




    var numberOfWizards= 0;

    var firstnameArray = ["Oloril", "Sharry", "Fruamros", "Graamros", "Beleak", "Kevben", "Gandalf", "Dumbledore", "Harry", "Mervin",
        "Thicket", "Ruben", "Aedan", "Sorrel", "Wylie", "Briar", "Talon", "Ruben", "Gust", "Barney", "Leroy", "Fennel", "Quartz", "Wren",
        "Carnelian", "George", "Tim", "Kevin",
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
        "./assets/Wizard Photos/image (19).png", "./assets/Wizard Photos/image (20).png",  "./assets/Wizard Photos/image (21).png",
        "./assets/Wizard Photos/image (22).png", "./assets/Wizard Photos/image (23).png", "./assets/Wizard Photos/image (24).png"
    ]

    //FUNCTION DEFINITIONS
    function getName() {
        firstName = firstnameArray[Math.floor(Math.random() * firstnameArray.length)];
        lastName = lastnameArray[Math.floor(Math.random() * lastnameArray.length)];
    }

    function generateImage() {
        var imageLength = imagearray.length;
        randomNumber = Math.floor(Math.random() * imageLength);
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

    function getPickupLine() {
        $.ajax({
        url: pickupLineURL,
        method: "GET",
        }).then(function (response) {
        pickupResponse = response.tweet;
        });
    }

    function generateCharacter() {
        //uses character info to create and append elements to page
        nameDiv = $("<h4>").text(firstName + " " + lastName);
        magicDiv = $("<div>").text("Magic school: " + magicSchool);
        equipmentDiv = $("<div>").text("Equipment: ");
        equip1El = $("<span>").text(equipment1 +", ");
        equip2El = $("<span>").text(equipment2);
        equipmentDiv.append(equip1El, equip2El);
        spellDiv = $("<div>").text("Spells: ");
        spell1El = $("<span>").text(spell1 +", ");
        spell2El = $("<span>").text(spell2);
        spellDiv.append(spell1El, spell2El);
        $("#user-stats").append(nameDiv, magicDiv, equipmentDiv, spellDiv);

        $("#user-image").empty();
        var imgDiv = $("<div>");
        var image = $("<img>").attr("style", "max-width: 400px");
        image.attr("src", imagearray[randomNumber]);
        imgDiv.append(image);
        $("#user-image").prepend(imgDiv);
    }

    //local storage
        function storeCharacter() {
            localStorage.setItem("yourImage", randomNumber);
            localStorage.setItem("yourFirstName", firstName);
            localStorage.setItem("yourLastName", lastName);
            localStorage.setItem("yourMagicSchool", magicSchool);
            localStorage.setItem("yourEquip1", equipment1);
            localStorage.setItem("yourEquip2", equipment2);
            localStorage.setItem("yourSpell1", spell1);
            localStorage.setItem("yourSpell2", spell2);
        }
        function retrieveCharacter() {
            randomNumber = localStorage.getItem("yourImage");
            firstName = localStorage.getItem("yourFirstName");
            lastName = localStorage.getItem("yourLastName");
            magicSchool = localStorage.getItem("yourMagicSchool");
            equipment1 = localStorage.getItem("yourEquip1");
            equipment2 = localStorage.getItem("yourEquip2");
            spell1 = localStorage.getItem("yourSpell1");
            spell2 = localStorage.getItem("yourSpell2");
        }
    //

    function storeWizard() {
        wizardNumber = localStorage.getItem("wizardNumber");
        if (wizardNumber !== null) {
            numberOfWizards = wizardNumber
        }
        numberOfWizards++;
        var i = numberOfWizards;
        localStorage.setItem("wizardNumber", numberOfWizards);
        localStorage.setItem("wizardImage" + i, randomNumber);
        localStorage.setItem("wizardFirstName" + i, firstName);
        localStorage.setItem("wizardLastName" + i, lastName);
    }

    function newWizard() {
        getName();
        getStats();
        getPickupLine();
        generateImage();
        generateCharacter();
    }

    function addToMatches() {
        $("#wizards-for-later").empty();
        wizardNumber = localStorage.getItem("wizardNumber");
        console.log(wizardNumber)

        for (var i = 0; i <= wizardNumber; i++){
            firstName = localStorage.getItem("wizardFirstName" + i)
            lastName = localStorage.getItem("wizardLastName" + i)
            if (firstName !== null) {

                wizardRow = $("<div>").attr("class", "row border").attr("id", i)
                savedWizardFirstName = $("<div>").text(firstName).attr("class", "col-sm-4").attr("id", "firstName" + i);
                savedWizardLastName = $("<div>").text(lastName).attr("class", "col-sm-4").attr("id", "lastName" + i);
                buttonDiv = $("<div>").attr("class", "col-sm-4").attr("id", i).append($("<button>").text("Go on a Date").attr("data-toggle", "modal").attr("data-target", "#date").attr("class", "btn btn-outline-danger go-on-date").attr("id", i));

                wizardRow.append(savedWizardFirstName, savedWizardLastName, buttonDiv)
                $("#wizards-for-later").append(wizardRow)
            }
        }
    }

    function addToParty() {
        $("#wizards-in-party").empty();
        partyNumber = localStorage.getItem("partyNumber");

        for (var i = 0; i <= partyNumber; i++){
            firstName = localStorage.getItem("partyFirstName" + i)
            lastName = localStorage.getItem("partyLastName" + i)
            if (firstName !== null) {

                wizardRow = $("<div>").attr("class", "row border")
                savedWizardFirstName = $("<div>").text(firstName).attr("class", "col-sm-4")
                savedWizardLastName = $("<div>").text(lastName).attr("class", "col-sm-4")
                buttonDiv = $("<div>").attr("class", "col-sm-4").append($("<button>").text("Send Message").attr("data-toggle", "modal").attr("data-target", "#date").attr("class", "btn btn-outline-danger go-on-date").attr("id", i ));

                wizardRow.append(savedWizardFirstName, savedWizardLastName, buttonDiv)
                $("#wizards-in-party").append(wizardRow)
            }
        }
    } 

    function storeParty() {
        console.log('storeparty');
            console.log(partyNumber);
            numberOfMembers = localStorage.getItem("partyNumber");
            if (numberOfMembers !== null) {
                partyNumber = numberOfMembers
            }
            
            firstName = localStorage.getItem("wizardFirstName" + i)
            lastName = localStorage.getItem("wizardLastName" + i)

            partyNumber++;
            localStorage.setItem("partyNumber", partyNumber);
            localStorage.setItem("partyFirstName" + i, firstName);
            localStorage.setItem("partyLastName" + i, lastName);
        }

    function removeFromMatches() {
        localStorage.removeItem("wizardImage" + i,);
        localStorage.removeItem("wizardFirstName" + i,);
        localStorage.removeItem("wizardLastName" + i,);
        addToMatches();
    }


    // data-toggle="modal" data-target="#charismaModal

    //FUNCTION CALLS
    $("#user-stats").empty();
    addToMatches();
    retrieveCharacter();
    generateCharacter();
    generateImage();

    //EVENT LISTENERS
    //new character button from welcome page to generate new character and display random attributes and image
    $("#new-button").click(function () {
        $("#home-page").attr("style", "display: none")
        $("#user-stats").empty();
        //get functions retrieve character info. generate function appends to page.
        newWizard();
    });

    //play game button to go to next page and save character to local
    $("#play-button").click(function () {
        $("#user-page").empty();
        $("#game-page").attr("style", "display: block");
        $("#save-page").attr("style", "display: block");
        $("#dungeon-date").attr("style", "display: block");
        $("#party").attr("style", "display: block");
        $("#home-page").attr("style", "display: none");
        //get functions retrieve character info. generate function appends to page.
        storeCharacter();
        addToParty();
        // getWizard();
        newWizard();
        $("#pickup").text(pickupResponse);
        addToParty();
    });

    $(".modalbutton").click(function () {
        getPickupLine();
        $(".pickup").empty();
        pickupEl = $("<div>").text(pickupResponse)
        $(".pickup").append(pickupEl);
    })

    //Flee button
    $("#flee-button").click(function () {

        $("#user-stats").empty();
        //get functions retrieve character info. generate functions appends to page.
        newWizard();
    });

    $(".modal-complete").click(function () {
        $("#user-stats").empty();
        //get functions retrieve character info. generate functions appends to page.
        addToMatches();
        addToParty();
        newWizard();
    });

    //Roll Charisma button
    $(".charisma-roll").click(function () {
        $(".pickup2").empty();
        getPickupLine();
        //   generatePickupLine()
        //roll a d20 for pickup line success
        var d20 = Math.floor(Math.random() * 20);

        if (d20 > 12) {
            $(".modal-title2").text("Success! He sent a message:");
            pickupEl = $("<div>").text(pickupResponse)
            $(".pickup2").append(pickupEl);
            $(".modal-complete").text("Add to Matches");
            storeWizard();
            $("#wizards-for-later").append(savedWizardImage, savedWizardFirstName, savedWizardLastName)

            } else {
            $(".modal-title2").text("Failure. He didn't reply.");
            $(".modal-complete").text("Ok");
            pickupEl = $("<div>").text("Your charisma is too low. Try with another wizard.")
            $(".pickup2").append(pickupEl);
        }
    })

    $(".go-on-date").click(function () {
        var d20 = Math.floor(Math.random() * 20);
        console.log('you clicked addtoparty!')
        i = ($(this).attr('id'));

        if (d20 > 12) {
            $(".date-title").text("Success! You had a good time.");
            $(".datetext").text('He wants to join your party!');
            $(".add-party").text("Add to Party");
            storeParty();
            addToParty();
            removeFromMatches();
            } else {
            $(".date-title").text("Failure. That date went poorly.");
            $(".datetext").text("He doesn't want to join your party right now. You can try again later!");
            $(".add-party").text("Aw. Ok");
            }
    })
})
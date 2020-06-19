
$(document).ready(function(){


    //VARIABLES
        var queryURL = "https://www.dnd5eapi.co/api/";
        var magicSchoolsURL = "https://www.dnd5eapi.co/api/magic-schools";
        var equipmentURL = "https://www.dnd5eapi.co/api/equipment/"
        var spellsURL = "https://www.dnd5eapi.co/api/spells/"
    
        var pickupLineURL = "http://pebble-pickup.herokuapp.com/tweets/random"
    
        var magicSchool = "";
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
    
        var imagearray = ["https://cdn.pixabay.com/photo/2019/08/19/23/27/wizard-4417430__340.png",
        "https://cdn.pixabay.com/photo/2019/08/20/00/17/wizard-4417511__340.png",
        "https://cdn.pixabay.com/photo/2020/02/14/06/07/wizard-4847575__340.png",
        "https://cdn.pixabay.com/photo/2016/03/31/17/34/wizard-1293759__340.png",
        "https://cdn.pixabay.com/photo/2019/03/24/12/19/harry-potter-4077473__340.png",
        "https://image.shutterstock.com/image-illustration/portrait-wizard-preparing-cast-spell-260nw-1234798453.jpg",
        "https://image.shutterstock.com/image-illustration/white-wizard-staff-on-isolated-260nw-1099126379.jpg",
        "https://image.shutterstock.com/image-illustration/evil-warlock-old-hooded-wizard-260nw-1370098925.jpg",
        "https://image.shutterstock.com/image-illustration/evil-warlock-posing-enchanted-dark-260nw-1099632581.jpg",
        "https://image.shutterstock.com/image-photo/wizard-making-spell-six-fingers-260nw-1199791486.jpg",
        "https://image.shutterstock.com/image-vector/wizard-logo-vector-mascot-260nw-773896306.jpg",
        "https://image.shutterstock.com/image-photo/greyhaired-bearded-severe-wizard-white-260nw-1240139065.jpg",
        "https://image.shutterstock.com/image-photo/old-man-wizard-long-grey-260nw-453761305.jpg",
        "https://image.shutterstock.com/image-photo/funny-wise-wizard-isolated-on-260nw-234840931.jpg",
        "https://image.shutterstock.com/image-photo/kareliarussia-september-5-2019-man-260nw-1527173723.jpg",
        "https://image.shutterstock.com/image-photo/creepy-man-black-hood-forest-260nw-748215526.jpg",
        "https://image.shutterstock.com/image-illustration/3d-illustration-white-wizard-magic-260nw-1625742901.jpg",
        "https://image.shutterstock.com/image-photo/young-illusionist-magician-showing-magic-260nw-1011934336.jpg",
        "https://www.wikihow-fun.com/images/thumb/c/ce/Pretend-to-Be-a-Wizard-Step-1-Version-4.jpg/aid540456-v4-728px-Pretend-to-Be-a-Wizard-Step-1-Version-4.jpg.webp",
        "https://www.wikihow-fun.com/images/thumb/a/a6/Pretend-to-Be-a-Wizard-Step-6-Version-4.jpg/aid540456-v4-728px-Pretend-to-Be-a-Wizard-Step-6-Version-4.jpg.webp",
        "https://www.wikihow-fun.com/images/thumb/2/2d/Pretend-to-Be-a-Wizard-Step-8-Version-4.jpg/aid540456-v4-728px-Pretend-to-Be-a-Wizard-Step-8-Version-4.jpg.webp",
        "https://www.wikihow-fun.com/images/thumb/b/bb/Pretend-to-Be-a-Wizard-Step-11-Version-2.jpg/aid540456-v4-728px-Pretend-to-Be-a-Wizard-Step-11-Version-2.jpg.webp"
    ]
    
        //on.click functions
        // $("#start-button").click(function(){
        //     console.log("You clicked start!");
        //     $("#home-page").empty();   
        //     generateName();
        // })
    
        $("#new-button").click(function(){
            console.log("You clicked new character!")
            $("#user-stats").empty();
            generateName();
            $("#play-button").attr("style", "display: initial");
    
            $("#user-image").empty();
            var imageLength = imagearray.length;
        
            var randomimage = Math.floor(Math.random() * imageLength);
        
            var imgDiv = $("<div>");
            var image = $("<img>").attr("style", "max-width: 400px");
        
            image.attr("src", imagearray[randomimage]);
        
            imgDiv.append(image);
        
            $("#user-image").prepend(imgDiv);
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
    
            var nameDiv = $("<h4>").text(firstName + " " + lastName);
            var magicDiv = $("<div>").text("magic school: " + magicSchool);
            var equipmentDiv = $("<div>").text("Equipment:")
                var equip1El = $("<div>").text(equipment1);
                var equip2El = $("<div>").text(equipment2);
                equipmentDiv.append(equip1El, equip2El)
            var spellDiv = $("<div>").text("Spells:")
                var spell1El = $("<div>").text(spell1);
                var spell2El = $("<div>").text(spell2);
                spellDiv.append(spell1El, spell2El)
            
            $("#user-stats").append(nameDiv, magicDiv, equipmentDiv, spellDiv);
        }
    
        function generatePickupLine() {
            $.ajax({
                url: pickupLineURL,
                method: "GET"
            }).then(function(response) {
                console.log(response.tweet)
            })
        }
    
        function hideStart() {
            $("#play-button").attr("style", "display: none");
        }
    
        //FUNCTION CALLS
    hideStart();
    
    })
    
    
    
    
    // // start
    // $("button", "#start-button").on("click", function () {
    //     // $("#user-image").empty();
    //     var imageLength = imagearray.length;
    
    //     var randomimage = Math.floor(Math.random() * imageLength);
    
    //     var imgDiv = $("<div>");
    //     var image = $("<img>");
    
    //     image.attr("src", imagearray[randomimage]);
    
    //     imgDiv.append(image);
    
    //     $("#wizard-image").prepend(imgDiv);
    // })
    // // new char
    // $("#new-button").click(function () {
    //     $("#user-image").empty();
    //     var imageLength = imagearray.length;
    
    //     var randomimage = Math.floor(Math.random() * imageLength);
    
    //     var imgDiv = $("<div>");
    //     var image = $("<img>");
    
    //     image.attr("src", imagearray[randomimage]);
    
    //     imgDiv.append(image);
    
    //     $("#user-image").prepend(imgDiv);
    // })
    // // start page image
    // var imageLength = imagearray.length;
    
    // var randomimage = Math.floor(Math.random() * imageLength);
    
    // var imgDiv = $("<div>");
    // var image = $("<img>");
    
    // image.attr("src", imagearray[randomimage]);
    
    // imgDiv.append(image);
    
    // $("#user-image").prepend(imgDiv);
    // //
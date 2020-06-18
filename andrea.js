queryURL = "https://www.dnd5eapi.co/api/";
pickupLineURL = "http://pebble-pickup.herokuapp.com/tweets/random"

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


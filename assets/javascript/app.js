
var topics = [ "dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "chinchilla", "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken", "capybara", "teacup pig", "serval", "salamander", "frog" ];

var gifTastic = {
	maxLimit: 10,
	renderButtons: function() {

		$("#topic-view").empty();

	    for (var i = 0; i < topics.length; i++) {

			var a = $("<button>");
			a.addClass("topic");
			a.attr("data-name", topics[i]);
			a.text(topics[i]);
			$("#topic-view").append(a);
		}
		console.log(a);

	},
	addTopic: function() {
		var newTopic = $('#topic-input').val();
		topics.push(newTopic);
	}
}
$(document).on("click", ".topic", function() {

	var animal = $(this).attr("data-name");
	console.log(animal);

	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
	animal + "&api_key=dc6zaTOxFJmzC&limit=" + gifTastic.maxLimit;
	console.log(queryURL);

	$("#gifs-view").empty();

	$.ajax({
		url: queryURL,
		method: "GET"
	})
	.done(function(response) {

		console.log(response);

		var results = response.data;

		for (var i = 0; i < results.length; i++) {

			var animalDiv = $("<div>");

			var str = results[i].rating;
			var p = $("<p>").text("Rating: " + str.toUpperCase());

			var animalImage = $("<img>");
			animalDiv.addClass("animalDiv");

			animalImage.attr("src", results[i].images.fixed_height_still.url);
			animalImage.attr("data-still", results[i].images.fixed_height_still.url);
			animalImage.attr("data-animate", results[i].images.fixed_height.url);
			animalImage.attr("data-state", "still");
			animalImage.addClass("gif");

			animalDiv.append(p);
			animalDiv.append(animalImage);

			// Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
			$("#gifs-view").append(animalDiv);
		}
	});
});

$(document).on("click", ".gif", function(event) {

	console.log(event);

	var state = $(this).attr("data-state");

	if (state === "still") {
		$(this).attr("src", $(this).attr("data-animate"));
		$(this).attr("data-state", "animate");
	} else {
		$(this).attr("src", $(this).attr("data-still"));
		$(this).attr("data-state", "still");
	}
});

$("#add-topic").on("click", function(event) {

	event.preventDefault();

	gifTastic.addTopic();

	gifTastic.renderButtons();
});

gifTastic.renderButtons();


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
	},
	addTopic: function() {
		var newTopic = $('#topic-input').val();
		topics.push(newTopic);
	}
}


$("#add-topic").on("click", function(event) {

  event.preventDefault();

  gifTastic.addTopic();

  gifTastic.renderButtons();
});

gifTastic.renderButtons();

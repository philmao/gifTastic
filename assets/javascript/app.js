
var topics = [ "dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "chinchilla", "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken", "capybara", "teacup pig", "serval", "salamander", "frog" ];

var gifTastic = {
	maxLimit: 10,
	renderButtons: function() {
		console.log('renderButtons called');
		// $("#animal-view").empty();

	    for (var i = 0; i < topics.length; i++) {

			var a = $("<button>");
			a.addClass("topic");
			a.attr("data-name", topics[i]);
			a.text(topics[i]);
			$("#animal-view").append(a);

		}
	}
}

// for ( var i = 0; i < topics.length; i++ ) {
// 	$('#animal-view').append('<button>' + topics[i] + '</button>');
// 	console.log(topics[i]);
// }



$("#add-animal").on("click", function(event) {
  // event.preventDefault() prevents submit button from trying to send a form.
  // Using a submit button instead of a regular button allows the user to hit
  // "Enter" instead of clicking the button if desired
  event.preventDefault();

  var newAnimal = $('#animal-input').val();
  topics.push(newAnimal);

  // Write code to grab the text the user types into the input field
  // Write code to add the new movie into the movies array

  // The renderButtons function is called, rendering the list of movie buttons
  gifTastic.renderButtons();
});

gifTastic.renderButtons();

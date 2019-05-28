// all imports at top, import config to access api key
import Config from '../../config.js';


// create an instance of the Config class
let config = new Config();


// render the navbar into the header
$.get('../../components/header.html', function(res) {
  $('#nav').html(res);
});

/*The above configuration steps have been completed for you.
Your only task before creating the functionality for each section below is to add 
your API key from http://openweathermap.org*/


// TODO: create a function that logs the city entered in the form
$("#button-sub").click(
  
  function searchCity() {
    let city = (`#search-city input[name=city_name]`).val();

    console.log(city);
  }
)
  // TODO: add AJAX call to weather API and display info
$(document).ready(function() { //Check if variable should be called city or city_name
  $('#submitWeather').click(function(){
    var city = $("#city").val();
    if (city != ''){

      $.ajax({

          url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=5e608c84acf2bca376c246b3770961d5",
          type: "GET",
          dataType: "jsonp",
          success: function(data){ //Passing data here
              console.log(data)
          }
      });

    }else{
      $("#error").html('Please enter a city');
    }


  });
});


//TODO: check to see if the submit button is pressed, if it is, stop the event from refreshing the page, and call searchCity()
$(document).ready(function() {
  $("#btnSubmit").click(function(){
      alert("The button was clicked");
  }); 
});
//Use the following function to grab the id of a button for your form
//Using .get() will resolve the CORS issue we were having earlier
$('#submit-btn').click(function() {
	$.get(url, function(data) {
		console.log(data);

    //append your data to HTML ids here (ie $("#high).append(data.main.temp_max)
		$('#high').append(data.main.temp_max)

	  });
})


// TODO: make search information not appear until they submit a city
//HINT: You will need to use CSS and JQuery to do this

$("form").submit(function(event) {
  if ( $( "input:" ).val() === "city_name" ) {
    $( "span" ).text( "Validated " + city_name) .show();
    return;
  }
 
  $( "span" ).text( "Not a valid city, please try again." ).show().fadeOut( 1000 );
  event.preventDefault();
});
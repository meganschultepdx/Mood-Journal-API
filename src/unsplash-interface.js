import { RandomImage } from './unsplash-service.js';


$(document).ready(function() {

  
  // $('#weatherLocation').click(function() {
  //   let city = $('#location').val();
  //   $('#location').val("");
  
    let randomImage = new RandomImage();  // create instance of WeatherService class
    let promise = randomImage.getRandomBackground();  // call the instance method and pass in user input

    promise.then(function(response) {
      let body = JSON.parse(response);
      // let generate = response["urls"]["raw"] = "https://images.unsplash.com/photo-1558603510-cf83e66d31e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc1MzQ0fQ";

      $('body').css('background-image', `${"response.urls.raw"}`);
      // $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      // $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
import { RandomImage } from './unsplash-service.js';



$(document).ready(function() {
  
    let randomImage = new RandomImage();  // create instance of WeatherService class
    let promise = randomImage.getRandomBackground();  // call the instance method and pass in user input

    promise.then(function(response) {
      let body = JSON.parse(response);
      
      $('body').css(
        {
          'background-image': `url('${body.urls.raw})`,
          'background-repeat': 'no-repeat',
          'background-size': 'cover' })
      
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
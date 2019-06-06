import { RandomImage } from './unsplash-service.js';

$(document).ready(function() {
  let userTheme;
  $("#mood-form").submit(function(event) {  
    event.preventDefault();
    userTheme = $("#mood").val();
    $('#mood').val("");

    console.log(userTheme);

    let randomImage = new RandomImage();
    let promise = randomImage.getRandomBackground(userTheme);

    promise.then(function(response) {
      let body = JSON.parse(response);
      
      $('body').css(
        {
          'background-image': `url('${body.urls.raw})`,
          'background-repeat': 'no-repeat',
          'background-size': 'cover' 
        });
      
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
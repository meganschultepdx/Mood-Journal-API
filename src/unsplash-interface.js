import { RandomImage } from './unsplash-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  let userTheme;
  
  $("#mood-form").submit(function(event) {  
    event.preventDefault();
    userTheme = $("#mood").val();
    $('#mood').val("");
    $("#userInput").text(userTheme);
    $('#yoMood').show();
    

    console.log(userTheme);

    let randomImage = new RandomImage();
    let promise = randomImage.getRandomBackground(userTheme);

    promise.then(function(response) {
      let body = JSON.parse(response);
      
      $('body').css(
        {
          'background-image': `url('${body.urls.raw + 'dpi=2'})`,
          'background-repeat': 'no-repeat',
          'background-size': 'cover',
          'height': '100vh'
        });
      
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
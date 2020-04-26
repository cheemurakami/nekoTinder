import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { NekoPicApiCall } from './nekopicApi.js';


function randomNumber(max){
  return Math.floor(Math.random() * Math.floor(max));
}
$(document).ready(function () {
  $(".start").click(function () {
    NekoPicApiCall().then(function (response) {
      if (response){
        let index = randomNumber(parseInt(response.data.length));
        let gifLink = response.data[index].images.downsized_large.url;
        $(".start").html(`<img src=${gifLink}>`);
      } else {
        $(".start").text("There was an error handling your request.");
      }
    });
  });
});
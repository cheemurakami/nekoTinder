import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";
import { NekoPicApiCall } from './nekopicApi.js';
import { Matcher } from "./Matcher";

function randomNumber(max){
  return Math.floor(Math.random() * Math.floor(max));
}
$(document).ready(function () {
  let matcher = new Matcher();
  if (matcher.isMutual()) {
    console.log("Likes you back!!");
  } else {
    console.log("Aww not mutual");
  }
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


import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";
import { NekoPicApiCall } from './nekopicApi.js';
import { Matcher } from "./Matcher";

function randomNumber(max){
  return Math.floor(Math.random() * Math.floor(max));
}
function addNextPic () {
  NekoPicApiCall().then(function (response) {
    if (response){
      let index = randomNumber(parseInt(response.data.length));
      let gifLink = response.data[index].images.downsized_large.url;
      $(".neko-pic").html(`<img src=${gifLink}>`);
    } else {
      $(".neko-pic").text("There was an error handling your request.");
    }
  });
}
$(document).ready(function () {
  const profileBtn = $(".profile-btn");
  $(".start").click(function () {
    $(".button").show(); 
    addNextPic();
  });
  $("#yes").click(function(){
    let matcher = new Matcher();
    if (matcher.isMutual()) {
      $(".message").text("Likes you back!!");
      matcher.showProfileBtn(profileBtn);
    } else {
      $(".message").text("Aww not mutual");
    }
  });
  $("#no").click(function(){
    addNextPic();
  });
});


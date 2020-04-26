import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";
import { Matcher } from "./Matcher";

$(document).ready(function () {
  let matcher = new Matcher();
  if (matcher.isMutual()) {
    console.log("Likes you back!!");
  } else {
    console.log("Aww not mutual");
  }
});

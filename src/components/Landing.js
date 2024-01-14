import React, { useEffect } from "react";
import $ from "jquery";
import Text from "./Text.js";
import video from '../images/landingvideo.mp4'
function Landing(props) {
  var text = props.text.split("$");
  useEffect(() => {
    setTimeout(() => {
        $(".landing_cont").fadeOut(1500);
    }, 8500);
  }, []);
  return (
    <div className="container-fluid landing_cont">
      <video src={video} muted autoPlay></video>
      <div className="landing_text">
        <Text text={text[0]} size="10vw" iden="one" />
        <Text text={text[1]} size="3vw" iden="two" />
      </div>
    </div>
  );
}
export default Landing;

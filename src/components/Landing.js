import React, { useEffect } from "react";
import $ from "jquery";
import img from '../images/timepass image.jpg'
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
      <div className="image-container landing_text">
        <img src="img" alt="" className="image-fade"/>
      </div>
    </div>
  );
}
export default Landing;

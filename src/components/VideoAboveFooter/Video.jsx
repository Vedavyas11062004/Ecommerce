import React from "react";
import "../../styles/videoStyles.css";

function Video() {
  return (
    <div className="footerVideo">
      <video autoPlay muted loop>
        <source src="/assets/css/footerVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;

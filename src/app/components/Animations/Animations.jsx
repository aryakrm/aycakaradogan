import React from "react";
import "./Animations.scss";

function Animations() {
  return (
    <section className="Animations">
      <h1>Our last 3D Animation Projects</h1>
      <div className="videos">
        <video width="320" height="240" loop muted autoPlay playsInline>
          <source
            src="https://ik.imagekit.io/aryakrm/01.mp4?updatedAt=1716490077484"
            type="video/mp4"
          />
        </video>
        <video width="320" height="240" loop muted autoPlay playsInline>
          <source
            src="https://ik.imagekit.io/aryakrm/02.mp4?updatedAt=1716490274214"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}

export default Animations;

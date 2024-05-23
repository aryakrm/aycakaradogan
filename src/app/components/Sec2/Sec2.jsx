import React from "react";
import "./Sec2.scss";
import Image from "next/image";

function Sec2() {
  return (
    <section className="Sec2">
      <Image
        src="/logo.png"
        alt="Ayca Karadogan Design Logo"
        width={340}
        height={180}
        priority
      />
      <div>
        <h1>
          You <span>Design</span>
        </h1>
        <h1>As Much As You Can Imagine</h1>
      </div>
    </section>
  );
}

export default Sec2;

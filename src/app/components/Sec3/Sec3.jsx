"use client";

import React from "react";
import "./Sec3.scss";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { MdDesignServices } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Sec3() {
  return (
    <section className="Sec3">
      <MdDesignServices />
      <h1>Last Projects</h1>
      <br />
      <h3>
        <FaLocationDot /> Dubai, UAE
      </h3>
      <div className="container">
        <Image
          src="https://i.postimg.cc/T1t94mv1/01.jpg"
          alt="first Slide"
          width={600}
          height={400}
        />
        <Image
          src="https://i.postimg.cc/503qXv0g/02.jpg"
          alt="Second Slide"
          width={600}
          height={400}
        />
      </div>
      <h3>
        <FaLocationDot /> İskele, Famagusta
      </h3>
      <div className="container">
        <Image
          src="https://i.postimg.cc/PfvPx4Hv/insta-8k-day-logolu-min.jpg"
          alt="first Slide"
          width={600}
          height={400}
        />
        <Image
          src="https://i.postimg.cc/W3Cz8DG4/insta-8k-logolu-min.jpg"
          alt="Second Slide"
          width={600}
          height={400}
        />
      </div>
    </section>
  );
}

export default Sec3;

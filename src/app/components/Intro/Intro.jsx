"use client";

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Intro.scss";
import Image from "next/image";

function Intro() {
  return (
    <section className="Intro">
      <Carousel fade>
        <Carousel.Item>
          <Image
            src="https://i.postimg.cc/PrJJKD6z/1-min-2.jpg"
            alt="first Slide"
            width={100}
            height={100}
            className="d-block w-100 h-100"
          />
          <Carousel.Caption>
            <h1>Palm Jumeirah Villa, Dubai, United Arab Emirates - 2024</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="https://i.postimg.cc/L6WtV2V5/1.png"
            alt="first Slide"
            width={100}
            height={100}
            className="d-block w-100 h-100"
          />
          <Carousel.Caption>
            <h1>Pasha Hotel Restoration Project, Lefkoşa - 2023</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="https://i.postimg.cc/5yKhdr61/1-min-5.jpg"
            alt="first Slide"
            width={100}
            height={100}
            className="d-block w-100 h-100"
          />
          <Carousel.Caption>
            <h1>Ercan Airport VIP Lounge, Lefkoşa - 2023</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="mouse"></div>
    </section>
  );
}

export default Intro;

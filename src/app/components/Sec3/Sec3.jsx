"use client";

import React from "react";
import "./Sec3.scss";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { MdDesignServices } from "react-icons/md";

function Sec3() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section className="Sec3">
      <MdDesignServices />
      <h1>Last Projects</h1>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Image
              src="https://i.ibb.co/68ysxns/01-Copy.jpg"
              alt="first Slide"
              width={600}
              height={400}
            />
          </div>
          <div className="embla__slide">
            <Image
              src="
              https://i.ibb.co/mXkN7VP/02-Copy.jpg"
              alt="second Slide"
              width={600}
              height={400}
            />
          </div>
          <div className="embla__slide">
            <Image
              src="https://i.ibb.co/2KCX40s/03-Copy.jpg"
              alt="third Slide"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec3;

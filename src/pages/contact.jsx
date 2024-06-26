"use client";

import React from "react";
import "./contact.scss";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import Nav from "../app/components/Nav/Nav";
import Footer from "../app/components/Footer/Footer";
import "../app/globals.css";

function Contact() {
  return (
    <motion.main
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Nav />
      <Image
        className="contactPic"
        src="https://ik.imagekit.io/aryakrm/contactPic.jpg?updatedAt=1716486436641"
        alt="first Slide"
        width={600}
        height={600}
      />
      <p>
        <FiPhone /> +90 533 836 08 15 <br />
        <MdOutlineEmail /> ayca.y@hotmail.com <br />
        <IoLocationOutline /> Yapım 76 Apartmanı, Sami Selçuk Sokak, Ortaköy
        Kermiya, Yapım, Ap 76, Metehan
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.551608439253!2d33.34200057635247!3d35.192726756653336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4543d49411bc265b%3A0xa142284badefb03d!2sOnaypa%20Trd.!5e0!3m2!1sen!2s!4v1714056778226!5m2!1sen!2s"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="location"
      ></iframe>
      <Image
        src="/logo.png"
        alt="Ayca Karadogan Design Logo"
        width={170}
        height={90}
        priority
      />
      <Footer />
    </motion.main>
  );
}

export default Contact;

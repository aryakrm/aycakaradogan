"use client";

import React from "react";
import "./about.scss";
import "../app/globals.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "../app/components/Nav/Nav";
import Footer from "../app/components/Footer/Footer";
import "../i18n.js";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <motion.main
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Nav />
      <Image
        className="aboutPic"
        src="https://ik.imagekit.io/aryakrm/aboutPic.jpg?updatedAt=1716485951250"
        alt="first Slide"
        width={600}
        height={600}
      />
      <p>{t("about_text")}</p>
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

export default About;

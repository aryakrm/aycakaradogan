"use client";

import React from "react";
import "./about.scss";
import "../app/globals.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "../app/components/Nav/Nav";
import Footer from "../app/components/Footer/Footer";
import { GiPencilRuler } from "react-icons/gi";
import { LuFlower2 } from "react-icons/lu";
import { MdArchitecture } from "react-icons/md";
import { SiAltiumdesigner } from "react-icons/si";
import { SiThreedotjs } from "react-icons/si";
import { FaCode } from "react-icons/fa6";
import "../i18n.js";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
      <h2>{t("services_title")}</h2>
      <ul className="services">
        <li>
          <GiPencilRuler />
          <h2>{t("project_design")}</h2>
        </li>
        <li>
          <SiAltiumdesigner />
          <h3>{t("arch_design")}</h3>
        </li>
        <li>
          <MdArchitecture />
          <h3>{t("int_design")}</h3>
        </li>
        <li>
          <LuFlower2 />
          <h3>{t("landscape")}</h3>
        </li>
        <li>
          <SiThreedotjs />
          <h2>{t("modeling")}</h2>
        </li>
        <li>
          <FaCode />
          <h2>{t("web")}</h2>
        </li>
      </ul>
      <Footer />
    </motion.main>
  );
}

export default About;

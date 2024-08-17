"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Nav.scss";
import { Yeseva_One } from "next/font/google";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoIosContacts } from "react-icons/io";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

const yeseva = Yeseva_One({
  weight: ["400"],
  subsets: ["latin"],
});

function Nav() {
  const { t } = useTranslation();

  const [active, setActive] = useState(false);

  const menuTogglerHandler = () => {
    setActive(!active);
  };

  function selectEn() {
    let loc = "/";
    window.location.replace(loc + "?lng=en");
  }
  function selectTr() {
    let loc = "/";
    window.location.replace(loc + "?lng=tr");
  }

  return (
    <nav className={yeseva.className}>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Ayca Karadogan Design Logo"
          width={170}
          height={90}
          priority
        />
      </Link>{" "}
      <ul className="nav_menu">
        <li>
          {" "}
          <Link href="/">
            {" "}
            <IoHomeOutline />
            {t("home")}
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/designs">
            {" "}
            <MdOutlineDesignServices />
            {t("design")}
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/about">
            {" "}
            <IoMdInformationCircleOutline />
            {t("about")}
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/contact">
            {" "}
            <IoIosContacts />
            {t("contact")}
          </Link>{" "}
        </li>
      </ul>
      <div className="languages">
        <Link href="https://www.instagram.com/aycakaradogan/" target="_blank">
          <FaInstagram />
        </Link>
        <span onClick={selectEn} className="fi fi-gb"></span>
        <span onClick={selectTr} className="fi fi-tr"></span>
      </div>
      <div onClick={menuTogglerHandler} className="hamburger">
        {active ? (
          <AiOutlineClose className="_icon" />
        ) : (
          <GiHamburgerMenu className="_icon" />
        )}
      </div>
      {active ? (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="side-menu"
          onClick={() => setActive(!active)}
        >
          <div onClick={menuTogglerHandler} className="hamburger">
            {active ? (
              <AiOutlineClose className="_icon" />
            ) : (
              <GiHamburgerMenu className="_icon" />
            )}
          </div>
          <ul className="side-menu-list">
            <li>
              {" "}
              <Link href="/">
                {" "}
                <IoHomeOutline />
                {t("home")}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/designs">
                {" "}
                <MdOutlineDesignServices />
                {t("design")}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/about">
                {" "}
                <IoMdInformationCircleOutline />
                {t("about")}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/contact">
                {" "}
                <IoIosContacts />
                {t("contact")}
              </Link>{" "}
            </li>
          </ul>
        </motion.div>
      ) : null}
    </nav>
  );
}

export default Nav;

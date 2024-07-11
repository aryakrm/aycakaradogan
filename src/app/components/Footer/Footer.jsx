import React from "react";
import "./Footer.scss";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

function Footer() {
  return (
    <footer>
      <div className="footer_info">
        <Image
          src="/logo.png"
          alt="Ayca Karadogan Design Logo"
          width={340}
          height={180}
          priority
        />
        <div className="contact_footer">
          <h5>
            {" "}
            <FiPhone /> +90 533 836 08 15
          </h5>
          <h5>
            {" "}
            <MdOutlineEmail /> info@aycakaradogan.com
          </h5>
        </div>
      </div>
      <p>
        Designed By Arya Karimi Copyright@ All Rights are Reserved By Ayça
        Karadoğan Design
      </p>
    </footer>
  );
}

export default Footer;

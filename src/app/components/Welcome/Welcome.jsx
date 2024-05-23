"use client";

import React from "react";
import "./Welcome.scss";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineDesignServices } from "react-icons/md";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Welcome() {
  const { t } = useTranslation();

  return (
    <section className="Welcome">
      <div>
        <h4>
          {" "}
          <MdOutlineDesignServices />
          {t("welcome")}
        </h4>
        <p>{t("about_sum")}</p>
        <Link href="/about">{t("more")}</Link>
      </div>
      <Image
        src="https://ik.imagekit.io/aryakrm/welcomePic.jpg?updatedAt=1716218029886"
        alt="Welcome"
        width={600}
        height={400}
      />
    </section>
  );
}

export default Welcome;

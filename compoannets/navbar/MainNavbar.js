import React from "react";
import styles from "./mainnavbar.module.css";
import logoImg from "../../public/icon_splogo_blue.svg";
import Image from "next/image";
import ClickBtn from "../buttons/ClickBtn";
import { IoCall, IoLogoWhatsapp } from "../Applicationicon";
import Link from "next/link";
import NavHangBug from "./NavHangBug";
export default function MainNavbar() {
  // Overview | Amenities | Plans | Location Advantages
  const navLinks = [
    { name: "Overview", path: "#overview" },
    { name: "Amenities", path: "#amenities" },
    { name: "Plans", path: "#plans" },
    { name: "Location Advantages", path: "#location" },
  ];

  return (
    <div className={styles.nav_main_container}>
      <div className={styles.inner_container}>
        <Link href={"/"} className={styles.logo_wrapper}>
          <Image
            src={logoImg}
            width={500}
            height={500}
            className={styles.img_Style}
            alt="Shapoorji Pallonji  Registration"
          />
        </Link>
        <div className={styles.rigeht_side_action_wrapper}>
          <div className={styles.nav_links_wrapper}>
            {navLinks.map((link, index) => (
              <Link key={index} href={link.path} className={styles.nav_link}>
                {link.name}
              </Link>
            ))}
          </div>

          <div className={styles.hangbug_wrapper}>
            <NavHangBug />
          </div>

          {/* <Link
            href="tel:+9174284 86574"
            className={styles.contact_action_container}
          >
            <div className={styles.action_iconBox}>
              <IoCall />
            </div>
            <div className={styles.action_text}>+91 74284 86574</div>
          </Link> */}

          {/* <Link
            href="https://wa.link/izndv5"
            className={styles.contact_action_container}
          >
            <div className={styles.whatsaap_iconBox}>
              <IoLogoWhatsapp />
            </div>
          </Link> */}
          <div className={styles.enquire_btn_wrapper}>
            <ClickBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

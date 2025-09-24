import React from "react";
import styles from "./mainnavbar.module.css";
import logoImg from "../../public/icon_splogo_blue.svg";
import Image from "next/image";
import ClickBtn from "../buttons/ClickBtn";
import { IoCall, IoLogoWhatsapp } from "../Applicationicon";
import Link from "next/link";
export default function MainNavbar() {
  return (
    <div className={styles.nav_main_container}>
      <div className={styles.inner_container}>
        <Link href={"/"} className={styles.logo_wrapper}>
          <Image
            src={logoImg}
            width={500}
            height={500}
            className={styles.img_Style}
            alt="Shapoorji Pallonji Event Registration"
          />
        </Link>
        <div className={styles.rigeht_side_action_wrapper}>
          <Link
            href="tel:+917503255500"
            className={styles.contact_action_container}
          >
            <div className={styles.action_iconBox}>
              <IoCall />
            </div>
            <div className={styles.action_text}>+91 75032 55000</div>
          </Link>

          <Link
            href="https://wa.link/th2fsn"
            className={styles.contact_action_container}
          >
            <div className={styles.whatsaap_iconBox}>
              <IoLogoWhatsapp />
            </div>
          </Link>
          <div className={styles.enquire_btn_wrapper}>
            <ClickBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

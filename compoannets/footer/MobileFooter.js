import React from "react";
import styles from "./mainfooter.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { IoLogoWhatsapp } from "../Applicationicon";
export default function MobileFooter() {
  return (
    <div className={styles.mobile_footer_mainContainer}>
      <Link href="tel:+917428486574" className={styles.callBtn}>
        Call now
      </Link>
      <Link href="tel:+917428486574" className={styles.whatsaap_btn}>
        <IoLogoWhatsapp size={20} />
      </Link>
      <Link href="tel:+917428486574" className={styles.enquire_btn}>
        Enquire Now
      </Link>
    </div>
  );
}

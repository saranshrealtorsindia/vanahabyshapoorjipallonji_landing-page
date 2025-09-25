import React from "react";
import styles from "./mainfooter.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
export default function MobileFooter() {
  return (
    <div>
      <Link href="tel:+917428486574" className={styles.callBtn}>
        <FaPhoneAlt className={styles.icon} />
        <span>Call Now</span>
        <span className={styles.number}>+91 74284 86574</span>
      </Link>
    </div>
  );
}

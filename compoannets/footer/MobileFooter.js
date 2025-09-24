import React from "react";
import styles from "./mainfooter.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
export default function MobileFooter() {
  return (
    <div>
      <Link href="tel:+919717930806" className={styles.callBtn}>
        <FaPhoneAlt className={styles.icon} />
        <span>Call Now</span>
        <span className={styles.number}>+91-9717930806</span>
      </Link>
    </div>
  );
}

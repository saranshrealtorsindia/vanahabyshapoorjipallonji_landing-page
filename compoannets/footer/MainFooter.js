import React from "react";
import styles from "./mainfooter.module.css";
import DekstopFooter from "./DekstopFooter";
import MobileFooter from "./MobileFooter";
export default function MainFooter() {
  return (
    <div className={styles.main_footer_container}>
      <div className={styles.dekstop_footer_wrapper}>
        <DekstopFooter />
      </div>
      <div className={styles.mobile_footer_wrapper}>
        <MobileFooter />
      </div>
    </div>
  );
}

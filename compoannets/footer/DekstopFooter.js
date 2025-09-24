import React from "react";
import styles from "./mainfooter.module.css";
import qrCodeImg from "../../public/QRCODE.webp";
import Image from "next/image";
import Link from "next/link";
export default function DekstopFooter() {
  return (
    <div className={styles.dekstop_footer_Container}>
      <div className={styles.inner_container}>
        <div className={styles.qr_code_wrapper}>
          <Image
            src={qrCodeImg}
            width={500}
            height={500}
            className={styles.imgStyle}
          />
        </div>
        <div className={styles.tiny_text}>
          MahaRERA number for Vanaha Verdant: Mahogany I & II – PR1260002500246.
        </div>
        <Link
          className={styles.tiny_text}
          href={"https://maharera.maharashtra.gov.in"}
        >
          https://maharera.maharashtra.gov.in
        </Link>
        <div className={styles.official_links}>
          <span>Disclaimer</span>
          <span>Copyright@2025 saranshrealtors. All rights reserved.</span>
          <Link href={"/"}>privacy policy </Link>
        </div>
      </div>
    </div>
  );
}

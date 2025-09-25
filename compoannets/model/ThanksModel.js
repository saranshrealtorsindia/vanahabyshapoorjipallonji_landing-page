"use client";
import React, { useContext, useEffect } from "react";
import styles from "./enquiremodel.module.css";
import thanksLogo from "../../public/thanks-logo.png";
import { ModelsContext } from "../../contextApis/ModelContextProvider";
import Image from "next/image";

export default function ThanksModel() {
  const { isThanksOpen, handelCloseThanksModel } = useContext(ModelsContext);

  if (!isThanksOpen) return null;

  return (
    <div className={styles.overlay} aria-hidden={!isThanksOpen}>
      <div className={styles.modalCard}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={handelCloseThanksModel}
          aria-label="Close"
        >
          ✕
        </button>

        <div className={styles.modalContent}>
          <div className={styles.thanks_container}>
            <div className={styles.thanks_image_container}>
              <div className={styles.thanks_img_wrapper}>
                <Image
                  src={thanksLogo}
                  width={100}
                  height={100}
                  className={styles.thnaks_imgStyle}
                  alt="Shapoorji Pallonji Registration"
                />
              </div>
            </div>
            <div className={styles.thanks_text}>Thanks For your Enquire</div>
          </div>
        </div>
      </div>
    </div>
  );
}

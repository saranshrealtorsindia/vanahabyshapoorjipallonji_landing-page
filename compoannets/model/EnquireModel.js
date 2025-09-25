"use client";
import React, { useContext } from "react";
import styles from "./enquiremodel.module.css";
import { ModelsContext } from "../../contextApis/ModelContextProvider";
import EnquireForm from "../forms/EnquireForm"; // adjust path if needed

export default function EnquireModel() {
  const { isModelOpen, handelToggleModel } = useContext(ModelsContext);

  if (!isModelOpen) return null;

  return (
    <div className={styles.overlay} aria-hidden={!isModelOpen}>
      <div className={styles.modalCard}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={() => handelToggleModel(false)}
          aria-label="Close"
        >
          ✕
        </button>

        <div className={styles.modalContent}>
          <EnquireForm />
        </div>
      </div>
    </div>
  );
}

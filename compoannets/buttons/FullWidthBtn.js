"use client";
import React, { useContext } from "react";
import styles from "./clickbtn.module.css";
import { ModelsContext } from "@/contextApis/ModelContextProvider";
export default function FullWidthBtn(props) {
  const { handelToggleModel } = useContext(ModelsContext);
  const { btnText = "Enquire Now" } = props;
  return (
    <button className={styles.enquireBtn} onClick={handelToggleModel}>
      {btnText}
    </button>
  );
}

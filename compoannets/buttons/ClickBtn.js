"use client";
import React, { useContext } from "react";
import styles from "./clickbtn.module.css";
import { ModelsContext } from "@/contextApis/ModelContextProvider";

export default function ClickBtn(props) {
  const { handelToggleModel } = useContext(ModelsContext);
  const { btnText = "Enquire Now" } = props;
  return (
    <div className={styles.btn_container} onClick={handelToggleModel}>
      {btnText}
    </div>
  );
}

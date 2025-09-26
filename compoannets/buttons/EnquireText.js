"use client";
import React, { useContext } from "react";
import styles from "./clickbtn.module.css";
import { ModelsContext } from "@/contextApis/ModelContextProvider";

export default function EnquireText(props) {
  const { handelToggleModel } = useContext(ModelsContext);
  const { btnText = "Enquire Now" } = props;
  return <div onClick={handelToggleModel}>{btnText}</div>;
}

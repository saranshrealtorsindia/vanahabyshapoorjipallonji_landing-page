import React from "react";
import styles from "./clickbtn.module.css";
export default function SubmitBtn(props) {
  const {
    btnText,
    disabledBtn,
    btnLoading = false,
    size = "medium",
    btnType = "fill_type_btn",
    btncolor,
    fullWidth = false,
  } = props;
  return (
    <div className={styles.btn_wrapper}>
      <button
        type="submit"
        className={`${styles.btn_style}  ${styles[btnType]} ${styles[size]} ${
          styles[btncolor]
        } ${fullWidth ? styles.fullWidth : ""} `}
        disabled={disabledBtn || btnLoading} // Disable button during loading
      >
        {btnLoading ? <BtnLoading spinerSize={size} /> : <span>{btnText}</span>}
      </button>
    </div>
  );
}

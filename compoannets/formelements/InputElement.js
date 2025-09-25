import React from "react";
import styles from "./formelement.module.css";
import { IoCall, MdOutlineMail, FaUser } from "../Applicationicon";
export default function InputElement(props) {
  const {
    inputLabel,
    inputPlaceholder,
    name,
    type = "text",
    register,
    rules,
    error,
  } = props;

  const getIcon = (fieldName) => {
    switch (fieldName) {
      case "firstname":
      case "lastname":
        return <FaUser />;
      case "email":
        return <MdOutlineMail />;
      case "number":
        return <IoCall />;
      default:
        return <FaUser />;
    }
  };

  return (
    <div className={styles.form_main_container}>
      <div className={styles.lable_wrapper}>
        <label>{inputLabel}</label>
      </div>

      <div className={styles.form_input_container}>
        <div className={styles.input_iconBox}>{getIcon(name)}</div>
        <div className={styles.input_wrapper}>
          <input
            id={name}
            type={type}
            placeholder={inputPlaceholder}
            className={`${styles.input_style} ${
              error ? styles.input_error : ""
            }`}
            {...(register ? register(name, rules) : {})}
            name={name}
          />
        </div>
      </div>
      <div>{error && <p className={styles.error_text}>{error}</p>}</div>
    </div>
  );
}

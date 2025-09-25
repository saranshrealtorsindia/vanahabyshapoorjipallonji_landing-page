import React from "react";
import styles from "./customeradio.module.css";
export default function CustomeRadioBtn(props) {
  const {
    radioStyle = "pill", // default to pill style
    radioValue,
    radioLable,
    labelHhtmlFor,
    RadioId,
    name = "transactionType",
    color = "#3b82f6", // default blue color
    size = "small",
    register,
    rules = { required: "Please choose a date" },
    checked,
    onChange,
    checkedWhen,
  } = props;
  const registeredProps = register ? register(name, rules) : {};
  const isControlled = !register && typeof checked !== "undefined";
  return (
    <div
      className={`${styles.radio_wrapper} ${styles[radioStyle]} ${styles[size]}`}
    >
      <input
        type="radio"
        id={RadioId}
        value={radioValue}
        name={name}
        checked={checked}
        onChange={onChange}
        className={styles.radio_input}
        {...registeredProps}
        {...(isControlled ? { checked, onChange } : {})}
      />
      <label
        htmlFor={labelHhtmlFor}
        className={styles.radio_label}
        style={{ "--radio-color": color }} // CSS variable for color
      >
        {" "}
        {radioLable}
      </label>
    </div>
  );
}

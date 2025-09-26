import React from "react";
import styles from "./actionicon.module.css";
import { FaPhoneAlt, FaWhatsapp, FaLink } from "react-icons/fa";
import Link from "next/link";
const icons = {
  phone: <FaPhoneAlt />,
  whatsapp: <FaWhatsapp />,
  link: <FaLink />,
};
export default function ActionIcon(props) {
  const { iconName, bgColor, hrfLink } = props;

  const icon = icons[iconName] || <FaLink />; // fallback to link icon

  return (
    <div>
      <Link
        href={hrfLink}
        className={styles.callBtn}
        style={{ backgroundColor: bgColor }}
        // target={hrfLink.startsWith("http") ? "_blank" : "_self"}
        rel={hrfLink.startsWith("http") ? "noopener noreferrer" : ""}
      >
        {icon}
      </Link>
    </div>
  );
}

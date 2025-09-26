"use client";
import React, { useContext } from "react";
import styles from "./appdrawer.module.css";
import { ModelsContext } from "@/contextApis/ModelContextProvider";
import { IoCloseSharp } from "../Applicationicon";
import DrawerEnquireBtn from "../buttons/DrawerEnquireBtn";

export default function AppDrawer() {
  const { isAppDrawer, setisAppDrawer, handelToggleAppDrawer } =
    useContext(ModelsContext);
  // Overview | Amenities | Plans | Location Advantages
  const navLinks = [
    { name: "Overview", path: "#overview" },
    { name: "Amenities", path: "#amenities" },
    { name: "Plans", path: "#plans" },
    { name: "Location Advantages", path: "#location" },
  ];
  return (
    <>
      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isAppDrawer ? styles.show : ""}`}
        onClick={handelToggleAppDrawer}
      ></div>

      {/* Drawer */}
      <div className={`${styles.drawer} ${isAppDrawer ? styles.open : ""}`}>
        <div className={styles.header}>
          <h2 className={styles.logo}></h2>
          <button className={styles.closeBtn} onClick={handelToggleAppDrawer}>
            <IoCloseSharp size={28} />
          </button>
        </div>

        <nav className={styles.nav}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className={styles.navLink}
              onClick={handelToggleAppDrawer}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className={styles.footer}>
          <DrawerEnquireBtn />
        </div>
      </div>
    </>
  );
}

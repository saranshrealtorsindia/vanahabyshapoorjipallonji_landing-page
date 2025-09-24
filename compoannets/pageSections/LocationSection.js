import React from "react";
import styles from "./pagesection.module.css";
import sectionImg from "../../public/location_imag.webp";
import Image from "next/image";
export default function LocationSection() {
  const sectionPoints = [
    "Premium 2 & 3 BHK Residences in West Pune",
    "1.43 Acres of Forest Garden",
    "20+ Lifestyle and Wellness Amenities",
    "One of India’s Top-Ranking Golf Courses in the Vicinity",
    "Seamless Connectivity Across the City",
    "ITP-Approved Integrated Township",
    "Homes with the Largest Carpet Residences",
  ];

  const schoolHighlights = [
    "Ryan International School – 12 min",
    "Ryan International School – 12 min",
    "Loyola High School – 25 min",
    "Suryadatta School – 12 min",
    "Sanskruti School – 29 min",
  ];

  const hospitalHiglights = [
    "Chellaram – 10 min",
    "Om Hospital – 15 min",
    "Opel – 10 min",
    "Sahyadri Hospital – 19 min",
    "Krishna Hospital – 22 min",
  ];

  const RetailsMallHiglight = [
    "Grocery Mart – 11 min",
    "Shree Guruprasad Retail – 15 min",
    "City Pride Multiplex – 28 min",
    "Neelam Market – 13 min",
    "Suraj General Store – 17 min",
  ];

  return (
    <div className={styles.top_mainContainer}>
      <div className={`${styles.section_heading} ${styles.large_mh_bottom}`}>
        <h2>Location connectivity </h2>{" "}
      </div>
      <div className={styles.points_columns}>
        <div className={styles.points_column}>
          <div className={styles.points_title}>
            <h3>Vanaha Verdant Key Highlights</h3>
          </div>
          <div className={styles.point_container}>
            {sectionPoints.map((text, index) => {
              return (
                <div className={styles.point_box} key={index}>
                  <div className={styles.point_dot}></div>
                  <div>{text}</div>
                </div>
              );
            })}
          </div>

          <div>
            <div className={styles.sub_pointContainer}>
              <div className={styles.sub_point_title}>
                <h3>Close to everything you need and more: </h3>
              </div>

              <div className={styles.higlight_container_wrapper}>
                <div className={styles.higlight_container}>
                  <div className={styles.highlight_title}>
                    <h4>Schools-</h4>
                  </div>

                  <div className={styles.higlight_option_wrapper}>
                    {schoolHighlights.map((item, index) => {
                      return (
                        <div className={styles.highlight_option}>{item}</div>
                      );
                    })}
                  </div>
                </div>

                <div className={styles.higlight_container}>
                  <div className={styles.highlight_title}>
                    <h4>Hospitals-</h4>
                  </div>

                  <div className={styles.higlight_option_wrapper}>
                    {hospitalHiglights.map((item, index) => {
                      return (
                        <div className={styles.highlight_option}>{item}</div>
                      );
                    })}
                  </div>
                </div>

                <div className={styles.higlight_container}>
                  <div className={styles.highlight_title}>
                    <h4>Retails & Malls-</h4>
                  </div>

                  <div className={styles.higlight_inlineoption_wrapper}>
                    {RetailsMallHiglight.map((item, index) => {
                      return (
                        <div className={styles.highlight_option}>{item}</div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.image_column}>
          <div className={styles.section_imgWrappper}>
            <Image
              src={sectionImg}
              width={500}
              height={500}
              className={styles.imgStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

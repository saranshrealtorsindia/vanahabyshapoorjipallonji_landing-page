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
    <div className={styles.top_mainContainer} id="location">
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

      <div>
        <div className={styles.points_title}>
          <h3>Google Map Location</h3>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.947116137302!2d73.747635!3d18.519364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf7b0cfb7f0d%3A0x1234567890abcdef!2sVanaha%20by%20Shapoorji%20Pallonji!5e0!3m2!1sen!2sin!4v1696512345678!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

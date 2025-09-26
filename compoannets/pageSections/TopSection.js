import React from "react";
import styles from "./pagesection.module.css";
import Image from "next/image";
import sectionImg from "../../public/top-section-image.jpg";
export default function TopSection() {
  const sectionPoints = [
    "Premium 2 & 3 BHK Residences in West Pune",
    "1.43 Acres of Forest Garden",
    "20+ Lifestyle and Wellness Amenities",
    "One of India’s Top-Ranking Golf Courses in the Vicinity",
    "Seamless Connectivity Across the City",
    "ITP-Approved Integrated Township",
    "Homes with the Largest Carpet Residences",
  ];

  return (
    <div className={styles.top_mainContainer} id="overview">
      <div className={styles.section_heading}>
        <h2>Presenting luxury homes with Mesmerising views </h2>{" "}
      </div>
      <div className={styles.section_subDescreption}>
        <p>
          Life at Vanaha Verdant is unlike anything you know. Its unique
          location gives it a climate and temperament that is unmatched by city
          life. Surrounded by hills and lush greenery. A place where you can
          hear the chirping of the birds and ripples of the water. It is a
          sanctuary for your mind, right here in Pune. An endless expanse of
          earth stretching as far as the eye can see, Vanaha Verdant is a place
          that lets you open up your senses to absorb everything that is there
          to feel.
        </p>
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

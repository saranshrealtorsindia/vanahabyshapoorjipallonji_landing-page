import React from "react";
import styles from "./gallerysection.module.css";
import exteriorImg1 from "../../public/galleyimg1.webp";
import exteriorImg2 from "../../public/galleyimg2.webp";
import exteriorImg3 from "../../public/galleyimg3.webp";
import exteriorImg4 from "../../public/galleyimg4.webp";
import interiorImg1 from "../../public/interiorimg1.webp";
import interiorImg2 from "../../public/interiorimg2.webp";
import interiorImg3 from "../../public/interiorimg3.webp";
import interiorImg4 from "../../public/interiorimg4.webp";
import interiorImg5 from "../../public/interiorimg5.webp";
import Image from "next/image";

export default function GallerySection() {
  const exteriorImages = [
    exteriorImg1,
    exteriorImg2,
    exteriorImg3,
    exteriorImg4,
  ];
  const interiorImages = [
    interiorImg1,
    interiorImg2,
    interiorImg3,
    interiorImg4,
    interiorImg5,
  ];

  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.title}>Gallery</h2>

      {/* Exterior */}
      <div className={styles.group}>
        <h3 className={styles.subTitle}>Exterior</h3>
        <div className={styles.grid}>
          {exteriorImages.map((img, i) => (
            <div className={styles.card} key={i}>
              <Image
                src={img}
                alt={`Exterior ${i + 1}`}
                className={styles.image}
                fill
              />
              <div className={styles.overlay}>
                <span>Exterior {i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interior */}
      <div className={styles.group}>
        <h3 className={styles.subTitle}>Interior</h3>
        <div className={styles.grid}>
          {interiorImages.map((img, i) => (
            <div className={styles.card} key={i}>
              <Image
                src={img}
                alt={`Interior ${i + 1}`}
                className={styles.image}
                fill
              />
              <div className={styles.overlay}>
                <span>Interior {i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import styles from "./aboutsection.module.css";
import Image from "next/image";
import bgImg from "../../public/vanaha-pune.jpg"; // your background image

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      {/* Background Image */}
      <div className={styles.bgWrapper}>
        <Image
          src={bgImg}
          alt="About Background"
          fill
          priority
          className={styles.bgImage}
        />
        {/* White overlay to match body color */}
        <div className={styles.overlay}></div>
      </div>

      {/* Content */}
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>About Shapoorji Pallonji</h2>
        <p className={styles.text}>
          With an intentional approach to design and development, Shapoorji
          Pallonji Real Estate is a well-regarded and reputed player in the
          Indian real estate sector owing to its cutting-edge design innovation,
          construction quality, and architectural excellence. It constitutes a
          significant segment of the Shapoorji Pallonji Group, an enormous
          multi-business conglomerate. The group has more than 157 years of
          legacy that bridges the earliest celebrated structures of India with
          modern marvels. With a development potential of over 142 million
          square feet, SPRE has made inroads into most Indian cities—Mumbai,
          Pune, Bangalore, Gurugram, and Kolkata—with a variety of developments,
          from luxury apartments and opulent residences to aspirational homes
          for mid-income homebuyers as well as one of the largest mass housing
          projects in India.
        </p>
      </div>
    </section>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import styles from "./pagehero.module.css";
import heroBg1 from "../../public/hero-bg-1.jpg";
import heroBg2 from "../../public/hero-bg-2.jpg";
import Image from "next/image";

const images = [heroBg1, heroBg2]; // add more if needed

export default function PageHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); // every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.main_container}>
      <div
        className={styles.sliderTrack}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className={styles.slide}>
            <Image
              src={img}
              alt={`Slide ${index}`}
              className={styles.img}
              priority
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
}

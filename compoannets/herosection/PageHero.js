"use client";
import React, { useEffect, useState } from "react";
import styles from "./pagehero.module.css";
import heroBg1 from "../../public/hero-bg-1.jpg";
import heroBg2 from "../../public/hero-new-1.jpg";
import Image from "next/image";

const images = [heroBg1, heroBg2]; // add more if needed

export default function PageHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 4000); // slide every 4s

    return () => clearInterval(interval);
  }, []);

  // When reaching the duplicate (index === images.length)
  useEffect(() => {
    if (currentIndex === images.length) {
      // Wait for transition to finish, then reset instantly
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // disable animation
        setCurrentIndex(0); // jump back to first real slide
      }, 1000); // match your CSS transition duration

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div className={styles.main_container}>
      <div
        className={styles.sliderTrack}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 1s ease-in-out" : "none",
        }}
      >
        {[...images, images[0]].map((img, index) => (
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

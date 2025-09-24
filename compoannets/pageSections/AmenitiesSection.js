import React from "react";
import styles from "./amanitiessection.module.css";
import {
  GiMountainClimbing,
  GiBamboo,
  GiBarbecue,
  GiPathDistance,
  GiKidSlide,
  GiMeditation,
  GiCampingTent,
  GiTreehouse,
  GiWeightLiftingUp,
  GiBinoculars,
} from "react-icons/gi";
import { FaTree, FaSpa } from "react-icons/fa";

export default function AmenitiesSection() {
  const amenities = [
    { name: "Adventure Sports Zone", icon: <GiMountainClimbing /> },
    { name: "Bamboo Grove", icon: <GiBamboo /> },
    { name: "Barbeque Zone", icon: <GiBarbecue /> },
    { name: "Cycle Track", icon: <GiPathDistance /> },
    { name: "Kids Play", icon: <GiKidSlide /> },
    { name: "Senior Citizen Corner", icon: <GiMeditation /> },
    { name: "Outdoor Camping Decks", icon: <GiCampingTent /> },
    { name: "Stargazing & Birdwatching", icon: <GiBinoculars /> }, // ✅ updated
    { name: "Treehouses & Tree Climbing", icon: <GiTreehouse /> },
    { name: "Gym & Spa", icon: <GiWeightLiftingUp /> },
  ];

  return (
    <div className={styles.amenities_container}>
      <h2 className={styles.heading}>World-Class Amenities</h2>
      <div className={styles.amenities_grid}>
        {amenities.map((item, index) => (
          <div className={styles.amenity_card} key={index}>
            <div className={styles.icon_wrapper}>{item.icon}</div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

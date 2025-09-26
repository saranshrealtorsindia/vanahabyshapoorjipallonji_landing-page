import React from "react";
import styles from "./css/pricePlandetails.module.css";
export default function PricePlanDetailSection() {
  const plans = [
    { type: "1 BHK", area: "On Request", price: "₹ 50 Lakhs*" },
    { type: "2 BHK", area: "On Request", price: "₹ 59 Lakhs*" },
  ];

  return (
    <section className={styles.priceSection} id="plans">
      <div className={styles.container}>
        <h2 className={styles.heading}>Price Plan Details</h2>
        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.type}>{plan.type}</h3>
              <p className={styles.area}>
                Carpet Area (RERA): <span>{plan.area}</span>
              </p>
              <p className={styles.price}>{plan.price}</p>
              <button className={styles.btn}>Enquire Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

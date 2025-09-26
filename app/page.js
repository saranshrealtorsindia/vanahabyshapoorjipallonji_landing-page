import React from "react";
import styles from "./page.module.css";
import MainNavbar from "@/compoannets/navbar/MainNavbar";
import PageHero from "@/compoannets/herosection/PageHero";
import TopSection from "@/compoannets/pageSections/TopSection";
import LocationSection from "@/compoannets/pageSections/LocationSection";
import AmenitiesSection from "@/compoannets/pageSections/AmenitiesSection";
import GallerySection from "@/compoannets/pageSections/GallerySection";
import AboutSection from "@/compoannets/pageSections/AboutSection";
import MainFooter from "@/compoannets/footer/MainFooter";
import PricePlanDetailSection from "@/compoannets/pageSections/PricePlanDetailSection";

export default function HomePage() {
  return (
    <div>
      <MainNavbar />

      <section className={styles.herosection_container}>
        <PageHero />
      </section>

      <section className={styles.section_container}>
        <TopSection />
      </section>

      <section className={styles.section_container}>
        <PricePlanDetailSection />
      </section>

      <section className={styles.section_container}>
        <AmenitiesSection />
      </section>
      <section className={styles.section_container}>
        <LocationSection />
      </section>
      <section className={styles.section_container}>
        <GallerySection />
      </section>
      <section className={styles.fullwidth_section}>
        <AboutSection />
      </section>
      <section className={styles.fullwidth_section}>
        <MainFooter />
      </section>
    </div>
  );
}

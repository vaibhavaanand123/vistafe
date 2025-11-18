import React from "react";
// import { Helmet } from "react-helmet-async";
import Hero from "../components/heroSection/Hero";
import Product from "../components/product/Product";
import FeaturesRow from "../components/features/FeaturesRow"

export default function Home() {
  return (
    <>
      {/* <Helmet>
        <title>Vistafe — Specialty Coffee</title>
        <meta name="description" content="Hand-selected beans, artisanal roasting and curated blends. Book a tasting." />
      </Helmet> */}

      <Hero />
      <FeaturesRow />
      <Product />
    </>
  );
}

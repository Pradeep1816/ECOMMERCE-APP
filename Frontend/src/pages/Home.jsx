import React from "react";
import Layout from "../components/Layout/Layout";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import FeatureProducts from "../components/FeatureProducts";
function Home() {
  const data = {
    name: "pradeep",
  };
  return (
    <Layout>
      <HeroSection head1={data} />
      <FeatureProducts />
      <Services />
    </Layout>
  );
}

export default Home;

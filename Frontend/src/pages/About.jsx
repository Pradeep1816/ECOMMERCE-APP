import React, { useContext } from "react";
import Layout from "../components/Layout/Layout";
import { useProductContext } from "../Context/ProductContext";

function About() {
  const { featureProducts, isLoading } = useProductContext();
  console.log(featureProducts);
  console.log(isLoading);
  return (
    <Layout>
      <div>
        <h1>About</h1>
      </div>
    </Layout>
  );
}

export default About;

import React from "react";
import { useProductContext } from "../Context/ProductContext";
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
function FeatureProducts() {
  const { isLoading, featureProducts } = useProductContext();
  // console.log(featureProducts);
  const setting = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col  justify-center items-center p-5 w-full bg-stone-600 my-5">
      <div className="w-[60%] m-auto p-5">
        <div className="mx-5 text-yellow-500">Check Now</div>
        <div className="m-5 text-2xl text-white">Our Features Servies </div>
        <Slider {...setting}>
          {featureProducts.map((item, index) => {
            return <Product key={index} currentItem={item}></Product>;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default FeatureProducts;

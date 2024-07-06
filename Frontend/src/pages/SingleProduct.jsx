import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { NavLink, useParams } from "react-router-dom";
import { useProductContext } from "../Context/ProductContext";
import PageNavigation from "../components/PageNavigation";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import Rating from "../components/Rating";
import AddToCart from "../components/AddToCart";

function SingleProduct() {
  const { id } = useParams();
  const { getSingleProducts, isSingleLoading, singleProduct } =
    useProductContext();

  useEffect(() => {
    getSingleProducts(id);
  }, []);

  const {
    id: alies,
    name,
    price,
    ratings,
    img,
    seller,
    stock,
    category,
  } = singleProduct;
  console.log(singleProduct);
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(1);
  const handlePrev = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const handleNext = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <Layout>
      <PageNavigation title={name} />
      {isSingleLoading ? (
        <div className="h-screen">
          <div className="w-3/4 m-auto">
            <h1>Loading..</h1>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid md:grid-cols-2 p-5 mt-10 border bg-gray-50 rounded-lg relative w-3/4 m-auto">
            <div className="">
              <figure>
                <img src={img} alt="" className="h-[350px]" />
              </figure>
            </div>
            <div>
              <h2 className="font-bold">{name}</h2>
              <Rating star={ratings} />
              <h2>
                MRP :<del>{price * quantity}</del>
              </h2>
              <p className="text-blue-500">
                Deal of the Day: {(price * quantity * (95 / 100)).toFixed(2)}
              </p>
              <h2>Category :{category}</h2>
              <div className="flex justify-between mt-5">
                <div>
                  <TbTruckDelivery className="text-2xl" />
                  <p>Free Delivery</p>
                </div>
                <div>
                  <TbReplace className="text-2xl" />
                  <p>10 Days Replacement</p>
                </div>
                <div>
                  <MdOutlineSecurity className="text-2xl" />
                  <p> 2 Year Warranty</p>
                </div>
              </div>
              <div className="mt-2">
                <p>
                  Available :
                  <span className="font-bold">
                    {stock ? "In Stock" : "Product Not Available"}
                  </span>
                </p>
                <p>
                  Id: <span className="text-blue-500">{id}</span>
                </p>
                <p>Brand : {seller}</p>
              </div>

              <div className="gap-5 mt-10 flex">
                <AddToCart
                  amount={amount}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                />
              </div>
              <div className="mt-5">
                <NavLink to="/cart">
                  <button className="border p-2 bg-blue-900/80 text-white">
                    ADD TO CART
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default SingleProduct;

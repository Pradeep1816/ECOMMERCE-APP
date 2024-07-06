import React from "react";

function AddToCart({ amount, handleNext, handlePrev }) {
  return (
    <div>
      <button
        className="border w-[50px] bg-gray-100 hover:bg-gray-200"
        onClick={handlePrev}
      >
        -
      </button>
      {amount}
      <button
        className="border w-[50px] bg-gray-100 hover:bg-gray-200"
        onClick={handleNext}
      >
        +
      </button>
    </div>
  );
}

export default AddToCart;

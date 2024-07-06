import React from "react";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
function Rating({ star }) {
  const starRating = Array.from({ length: 5 }, (v, i) => {
    let num = i + 0.5;
    // debugger;
    console.log();
    return (
      <span>
        {star >= i + 1 ? (
          <FaStar className="text-yellow-500" />
        ) : star > num ? (
          <FaStarHalfStroke />
        ) : (
          <CiStar />
        )}
      </span>
    );
  });

  return <div className="flex gap-0.5 mt-2">{starRating}</div>;
}

export default Rating;

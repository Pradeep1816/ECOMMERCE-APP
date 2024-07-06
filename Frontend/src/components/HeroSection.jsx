import React from "react";
import { NavLink } from "react-router-dom";
function HeroSection({ name }) {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="text-center md:text-left">
          <p>Welcome To</p>
          <h1 className="text-stone-900 font-bold">pradeep</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            voluptate necessitatibus repudiandae sequi fugiat? Fugiat quam ab,
            dolores eaque consectetur animi ad quis delectus sequi repudiandae
            neque tempore, consequatur mollitia!
          </p>
          <div className="m-5 h-16 border flex justify-center items-center">
            <NavLink>
              <button className="bg-yellow-500 p-2 text-white ease-in duration-300 ">
                show now
              </button>
              <button className="ease-in duration-300">shoping</button>
            </NavLink>
          </div>
        </div>
        <div>
          <div>
            <figure>
              <img src="images/shoping.jpg" alt="hero section" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

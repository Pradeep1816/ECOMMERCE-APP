import React from "react";
import { NavLink } from "react-router-dom";

function PageNavigation({ title }) {
  return (
    <div className="mx-2">
      <NavLink to="/" className="text-blue-400">
        Home
      </NavLink>
      / {title}
    </div>
  );
}

export default PageNavigation;

import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavComponents = () => {
  return (
    <nav>
      <ol className="flex space-x-3 text-blue-600 mt-3 select-none mb-5">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" state={{phoneNumber:912341234}}>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/book">Book</NavLink>
        </li>
        <li>
          <NavLink to={`book/${Math.random() * 10}}`}>
            DetailBook
          </NavLink>
        </li>
      </ol>
    </nav>
  );
};

export default NavComponents;

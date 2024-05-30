import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


function Navbar() {
  return (
    <nav className="navbar">
      <h1>My React App</h1>
      <ul>
        <li>
            <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
            <Link to="/portofolio">Portofolio</Link>
        </li>
        <li>
            <Link to="/products">Products</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;

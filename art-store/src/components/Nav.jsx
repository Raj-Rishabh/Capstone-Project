import React from "react";

function Nav() {
  return (
    <nav>
      <a href=".index.html" class="logo">
        Art
      </a>
      <div className="toggle"></div>
      <ul className="menu">
        <li className="">
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#item ">Items</a>
        </li>
        <li>
          <a href="#grid">Gallery</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

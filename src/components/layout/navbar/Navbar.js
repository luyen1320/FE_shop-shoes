import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/" style={{ color: "#c72092", textDecoration: "none" }}>
            Shoe<span>s</span>
          </Link>
        </h1>
      </div>

      <nav className="navbar">
        <ul>
          <li>
            <Link to="">Giới thiệu</Link>
          </li>
          <li>
            <Link to="">Brands</Link>
            <ul>
              <li>
                <Link to="/jordan">Jordan</Link>
              </li>
              <li>
                <Link to="">Adidas</Link>
              </li>
              <li>
                <Link to="">Nike</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="">Sale</Link>
          </li>
          <li>
            <Link to="">Phụ kiện</Link>
          </li>
          <li>
            <Link to="">Liên hệ</Link>
          </li>
        </ul>
      </nav>

      <div className="icons">
        <Link>
          <i className="fa-solid fa-heart"></i>
        </Link>

        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>

        <Link to="/login">
          <i className="fa-solid fa-user"></i>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;

import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import DropMenu from "../../pages/UserDashboard/DropdownMenu/DropMenu";

function Navbar(props) {
  const [openProfile, setOpenProfile] = useState(false);

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
            <Link to="">Thương hiệu</Link>
            <ul>
              <li>
                <Link to="/admin">Jordan</Link>
              </li>
              <li>
                <Link to="/product-page">Adidas</Link>
              </li>
              <li>
                <Link to="/order">Nike</Link>
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
        {/* <Link>
          <i className="fa-solid fa-heart"></i>
        </Link> */}

        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>

        <Link to="/login">
          <i className="fa-solid fa-user"></i>
        </Link>
      </div>

      {/* {openProfile && <DropMenu />} */}
      <DropMenu />
    </header>
  );
}

export default Navbar;

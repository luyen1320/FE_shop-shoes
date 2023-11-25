import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import DropMenu from "../../pages/UserDashboard/DropdownMenu/DropMenu";
import { IoPersonCircleOutline } from "react-icons/io5";

function Navbar(props) {
  const [openProfile, setOpenProfile] = useState(false);

  const handleOnChangeMenu = () => {
    setOpenProfile(true);
  };

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
            <Link to="/sale-product">Sale</Link>
          </li>
          <li>
            <Link to="/accessory">Phụ kiện</Link>
          </li>
          <li>
            <Link to="/contact">Liên hệ</Link>
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

        {/* <Link to="/login">
          <i className="fa-solid fa-user"></i>
        </Link> */}
        <span onClick={() => setOpenProfile((prev) => !prev)}>
          <IoPersonCircleOutline />
        </span>
      </div>

      {openProfile && <DropMenu />}
      {/* <DropMenu /> */}
    </header>
  );
}

export default Navbar;

import React from "react";
import "./DropMenu.scss";
import { Link } from "react-router-dom";

const Menus = [
  {
    path: "/admin",
    name: "Thông tin tài khoản",
  },
  {
    path: "",
    name: "Đăng xuất",
  },
];

const DropMenu = () => {
  return (
    <div className="drop-menu">
      <ul className=" gap-5">
        {Menus.map((menu) => (
          <li key={menu}>
            <Link to={menu.path}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropMenu;

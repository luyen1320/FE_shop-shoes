import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import "./SideBar.scss";
import { FaBars } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { routes } from "../../assets/data/menu";
import { memo } from "react";

const AdminLayout = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          className="sidebar"
          animate={{
            width: isOpen ? "220px" : "38px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
        >
          <div className="top_section">
            {isOpen && (
              <motion.h1
                className="logo"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={inputAnimation}
              >
                SHOP_SHOES
              </motion.h1>
            )}
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {/* <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search..."
                />
              )}
            </AnimatePresence>
          </div> */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <Sidebar
                    key={index}
                    route={route}
                    isOpen={isOpen}
                    setOpen={setOpen}
                    showAnimation={showAnimation}
                  />
                );
              }

              return (
                <NavLink
                  className="link"
                  activeclassname="active"
                  to={route.path}
                  key={index}
                >
                  <div className="icon">{route.icon}</div>
                  {isOpen && (
                    <AnimatePresence>
                      <motion.div
                        className="link_text"
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        variants={showAnimation}
                      >
                        {route.name}
                      </motion.div>
                    </AnimatePresence>
                  )}
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <Outlet />
      </div>
    </>
  );
};

export default memo(AdminLayout);

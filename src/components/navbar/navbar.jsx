import { useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const Nav_bar = () => {
  const [active, setActive] = useState(false);

  const activate = () => {
    setActive(active ? false : true);
  };

  return (
    <nav>
      <div className="container nav_container">
        <h1 className="logo">
          splen<span>dior</span>
        </h1>

        <div className={active ? "links active " : "links"}>
          <NavLink
            to="/"
            activeclassname="active"
            exact
            onClick={() => {
              activate();
            }}
          >
            home
          </NavLink>

          <NavLink
            to="/about"
            activeclassname="active"
            onClick={() => {
              activate();
            }}
          >
            about
          </NavLink>

          <NavLink
            to="/rooms"
            activeclassname="active"
            onClick={() => {
              activate();
            }}
          >
            room
          </NavLink>

          <NavLink
            to="/services"
            activeclassname="active"
            onClick={() => {
              activate();
            }}
          >
            service
          </NavLink>

          <NavLink
            to="/blog"
            activeclassname="active"
            onClick={() => {
              activate();
            }}
          >
            blog
          </NavLink>

          <NavLink
            to="/contact"
            activeclassname="active"
            onClick={() => {
              activate();
            }}
          >
            contact us
          </NavLink>
        </div>
        <div
          className={active ? "menu_btn active" : "menu_btn"}
          onClick={() => {
            activate();
          }}
        >
          <MenuIcon className="icon" />
          <CloseIcon className="icon" />
        </div>
      </div>
      <div
        className={active ? "overlay active" : "overlay"}
        onClick={() => {
          activate();
        }}
      ></div>
    </nav>
  );
};

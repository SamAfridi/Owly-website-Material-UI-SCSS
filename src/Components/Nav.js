import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import "./../style/index.scss";
import "./Nav.Modules.scss";
import Slider from "./Slider";
import { useMediaQuery, useTheme } from "@mui/material";

const Nav = () => {
  const theme = useTheme();
  const isMitch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <div className="header">
        {isMitch ? (
          <>
            <Slider />
          </>
        ) : (
          <div className="header_contant">
            <div className="header_contant_logo">
              <img className="header_contant_img" src={logo} alt="logo" />
              <h2 style={{ marginTop: "6px" }}>Owly</h2>
            </div>

            <nav className="header_contant_nav">
              <ul>
                <li>
                  <a className="active">Home</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Expertise</a>
                </li>
                <li>
                  <a>services</a>
                </li>
                <li>
                  <a>Timeline</a>
                </li>
                <li>
                  <a>Award</a>
                </li>
                <li>
                  <a>Media</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;

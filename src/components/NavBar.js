import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget";
import logoCommerce from "../img/logoEcommerce.png";

export const NavBar = () => {
  return (
    <nav className="d-flex col-12" id="navBar">
      <div className="d-flex col-5 align-items-center">
        <img className="p-2 " src={logoCommerce} alt="LogoeComerce"></img>
        <h1 className="ps-5">LOGO BRAND</h1>
      </div>
      <div className="container d-flex col-7 justify-content-end align-items-center">
        <ul>
          <li><a href="www.google.com">For him</a></li>
        </ul>
        <ul>
          <li><a href="www.google.com">For her</a></li>
        </ul>
        <ul>
          <li>
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
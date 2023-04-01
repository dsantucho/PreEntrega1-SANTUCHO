// import * as React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import CartWidget from "./CartWidget";
// import logoCommerce from "../img/logoEcommerce.png";
// import  {Link} from "react-router-dom";

// export const NavBar = () => {
//   return (
//     <nav className="d-flex col-12" id="navBar">
//       <div className="d-flex col-5 align-items-center">   
//         <img className="p-2 " src={logoCommerce} alt="LogoeComerce"></img>
//         <Link to="/"><h1 className="ps-5">Pixel Fashion</h1></Link>
//       </div>
//       <div className="container d-flex col-7 justify-content-end align-items-center">
//         <ul>
//           <Link to="/">Home</Link>
//         </ul>
//         <ul>
//           <Link to="/forHim">For him</Link>
//         </ul>
//         <ul>
//           <Link to="/forHer">For her</Link>
//         </ul>
//         <ul>
//           <Link>
//             <CartWidget />
//           </Link>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";
import logoCommerce from "../img/logoEcommerce.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="d-flex col-12" id="navBar">
      <div className="d-flex col-5 align-items-center">
        <img className="p-2 " src={logoCommerce} alt="LogoeComerce"></img>
        <Link to="/">
          <h1 className="ps-5">Pixel Fashion</h1>
        </Link>
      </div>
      <div className="container d-flex col-7 justify-content-end align-items-center">
        <ul>
          <Link to="/">Home</Link>
        </ul>
        <ul>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Category
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/category/forHim">For him</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/category/forHer">For her</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/category/others">Others</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </ul>

        <ul>
          <Link>
            <CartWidget />
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

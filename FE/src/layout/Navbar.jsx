import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistProvider";
import { MainContext } from "../context/MainProvider";
import "./Navbar.scss";

function Navbar() {
  const { wishlist } = useContext(WishlistContext);
  const { basket } = useContext(MainContext);
  return (
    <header>
      <div className="img">
        <img
          src="https://preview.colorlib.com/theme/wines/images/logo.png"
          alt=""
        />
      </div>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/basket"}>
                Basket <sup>({basket.length})</sup>
              </Link>
            </li>
            <li>
              <Link to={"/wishlist"}>
                Wishlist <sup>({wishlist.length})</sup>
              </Link>
            </li>
            <li>
              <Link to={"/add"}>Add</Link>
            </li>
          </ul>
          <button className="menu"><i className="fa-solid fa-bars"></i></button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

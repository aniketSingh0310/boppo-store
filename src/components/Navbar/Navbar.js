import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./navbar.module.css";

const NavbarPanel = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.main1}>
          <img src="./boppo.jpeg" width={150} height={90} alt="" />
          <div>
            <Link to="/" className={styles.linkStyle}>
              Products
            </Link>
          </div>
        </div>
        <Link to="/cart">
          <button>My Cart: {cartItems.length}</button>
        </Link>
      </div>
    </div>
  );
};
export default NavbarPanel;

import React from "react";
import "./Footer.scss"
function Footer() {
  return (
    <footer>
      <div className="logos">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-instagram"></i>
      </div>
      <p>Copyright ©2024 All rights reserved | This template is made with<i style={{color:"red"}} className="fa-solid fa-heart"></i> by Colorlib</p>
    </footer>
  );
}

export default Footer;

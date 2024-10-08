import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.final} alt=""  width={100} height={100}/>
         
          <p>
            
            Thank you for choosing Sainik Hardware. We provide top-quality tools
            and building materials for all your project needs. Your trusted
            partner in construction and home improvement.
          </p>
          <div className="footer-social-icon">
          <img src={assets.fb1} alt="" width={50} height={50}/>
          <img src={assets.li2} alt="" width={50} height={50} />
          <img src={assets.wa2} alt=""  width={40} height={50}/>
        </div>
        </div>
        <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
            <li> Home</li>
            <li>About Us</li>
            <li> Delivery</li>
            <li>Privacy Policy</li>
        </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>977-9821404346</li>
                <li>sainikhardware@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">
        Copyright 2024 © SainikHardware.com-All Right Reserved
      </p>
    </div>
  );
};

export default Footer;

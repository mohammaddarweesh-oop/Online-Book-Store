import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer ">
      <div className="container">
        <div className="footer-social-media">
          <div className="footer-social-media-text">
            follow us on social media
          </div>
          <div className="footer-social-media-icons">
            <div className="footer-social-media-icon">
              <i style={{ color: "#4c68d7" }} className="bi bi-instagram"></i>
            </div>
            <div className="footer-social-media-icon">
              <i style={{ color: "#2980b9" }} className="bi bi-facebook"></i>
            </div>
            <div className="footer-social-media-icon">
              <i style={{ color: "#25D366" }} className="bi bi-whatsapp"></i>
            </div>
            <div className="footer-social-media-icon">
              <i style={{ color: "#0077b5" }} className="bi bi-linkedin"></i>
            </div>
            <div className="footer-social-media-icon">
              <i style={{ color: "skyblue" }} className="bi bi-twitter"></i>
            </div>
          </div>
        </div>

        <div className="footer-links-wrapper">
          <div className="footer-links-item">
            <h3 className="footer-links-item-title">Usefull links</h3>
            <ul className="footer-links">
              <Link to={"/"} className="footer-link">
                Home
              </Link>
              <Link to={"/Authors"} className="footer-link">
                Author
              </Link>
              <Link to={"/About"} className="footer-link">
                About Us
              </Link>
              <Link to={"/Contact"} className="footer-link">
                Contact Us
              </Link>
              <Link to={"/Register"} className="footer-link">
                Register
              </Link>
            </ul>
          </div>

          <div className="footer-links-item">
            <h3 className="footer-links-item-title">Contact Information</h3>
            <div className="footer-address-wrapper">
              <div className="footer-address-item">
                <i className="bi bi-geo-alt-fill"></i>
                Jordan - Amman - Sahab St
              </div>
              <div className="footer-address-item">
                <i className="bi bi-telephone-fill"></i>
                123-456-789
              </div>
              <div className="footer-address-item">
                <i className="bi bi-envelope-fill"></i>
                mohammad@fakeemail.com
              </div>
            </div>
          </div>

          <div className="footer-links-item">
            <h3 className="footer-links-item-title">About Us</h3>
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis aperiam fugiat ullam distinctio iusto sunt, numquam,
              quis reiciendis pariatur error itaque? Voluptatem libero maiores
              eveniet fugiat provident architecto minima pariatur! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Aliquam perferendis
              nemo hic laborum aspernatur.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

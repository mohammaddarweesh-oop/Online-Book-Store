import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact">
      <div className="contact-wrapper">
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-house-fill"></i>
            Address
          </div>
          <p className="contact-item-text">Jordan - Amman - Sahab Street</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-telephone-fill"></i>
            Phone
            <p className="contact-item-text">123-456-789</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-envelope-paper"></i>
            Email
            <p className="contact-item-text">engmohammaddarweesh@gmail.com</p>
          </div>
        </div>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="contact-form">
        <h2 className="contact-form-title">Contact Us Form</h2>
        <div className="contact-input-wrapper">
          <input type="text" placeholder="Name *" required />
          <input type="text" placeholder="Subject *" required />
          <input type="text" placeholder="Email *" required />
        </div>
        <textarea
          className="contact-textarea"
          name=""
          placeholder="Your Message"
          rows="5"
        ></textarea>
        <input type="submit" value="submit" className="contact-btn" />
      </form>
    </div>
  );
}

export default ContactUs;

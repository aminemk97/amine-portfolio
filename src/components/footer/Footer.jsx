import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Amine</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
          
        </ul>

        <div className="footer__social">
          <a href="" className="footer__social-link" target="_blank">
            <i className="bx bxl-whatsapp"></i>
          </a>

          <a href="" className="footer__social-link" target="_blank">
            <i className="bx bx-mail-send"></i>
          </a>

          <a href="https://www.linkedin.com/in/aminemkacher/" className="footer__social-link" target="_blank">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
            2026 - All rights reserved
        </span>
      </div>
    </section>
  );
};

export default Footer;

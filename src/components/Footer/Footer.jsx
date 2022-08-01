import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__hero">
          <ul className="footer--list">
            <li className="footer--item">
              <a className="footer--link">Ana Sayfa</a>
            </li>
            <li className="footer--item">
              <a className="footer--link">Kurumsal</a>
            </li>
            <li className="footer--item">
              <a className="footer--link">Neler Yapıyoruz?</a>
            </li>
            <li className="footer--item">
              <a className="footer--link">Projelerimiz</a>
            </li>
            <li className="footer--item">
              <a className="footer--link">Blog</a>
            </li>
          </ul>
          <div className="footer__logotip">
            <p className="footer--logotib">
              © 2021 Can Çevik. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

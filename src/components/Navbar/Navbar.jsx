import React from "react";
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__hero">
            <div className="navbar__logo">
                <div className="navbar__img"></div>
                <p className="navbar--logo">Digital <span className="navbar--span">Agency</span></p>
            </div>
            <div className="navbar__menu">
                <ul className="navbar--list">
                    <li className="navbar--item">
                        <a href="#" className="navbar--link">Ana Sayfa</a>
                    </li>
                    <li className="navbar--item">
                        <a href="#" className="navbar--link">Kurumsal</a>
                    </li>
                    <li className="navbar--item">
                        <a href="#" className="navbar--link">Neler Yapıyoruz?</a>
                    </li>
                    <li className="navbar--item">
                        <a href="#" className="navbar--link">Blog</a>
                    </li>
                </ul>
            </div>
            <div className="navbar__btn">
                <p className="navbar--lan">EN</p>
                <button className="navbar--btn">Müşteri Girişi</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import "./Header.scss";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header__hero1">
        <div className="container">
          <div className="header__hero">
            <h1 className="header__title">
              İşinize Uygun <span className="header--span">Tasarım</span> Ve{" "}
              <span className="header--span">Yazılımlar</span>
            </h1>
            <p className="header--parag">
              360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
              İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım
              hizmetleri sunmaktayız.
            </p>
            <button className="navbar--btn header--btn">
              Detaylı İncele <img src="./img/symbol.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

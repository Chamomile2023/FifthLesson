import React from "react";
import "./SectionText.scss";

const SectionText = () => {
  return (
    <div className="sectiontext">
      <div className="container">
        <div className="sectiontext__hero">
          <h2 className="sectiontext--ttile">
            Ürününüz veya hizmetiniz için en iyisini birlikte yapalım.
          </h2>
          <p className="littlecard--parag sectiontext--parag">
            360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
            İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım
            hizmetleri sunmaktayız.
          </p>
          <button className="navbar--btn sectiontext--btn">
            HEMEN TEKLİF ALIN <img src="./img/symbol.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionText;

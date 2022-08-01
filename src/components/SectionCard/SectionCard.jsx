import React from "react";
import "./SectionCard.scss";

const SectionCard = () => {
  let card = {
    img: ["./img/5.png", "./img/6.png", "./img/7.png", "./img/8.png"],
    span: ["Dijital Pazarlama", "Kurumsal Kimlik Tasarımı"],
    title: [
      "Sosyal CRM Nedir? Sosyal CRM Avantajları?",
      "Dijital PR Nedir? Dijital PR Neden Gereklidir?",
      "Dijital Ajans Nedir? Doğru Dijital Ajans Nasıl Seçilir?",
      "Online İtibar Yönetimi Nedir?",
    ],
    parag: [
      "Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM) stratejilerini sosyal...",
      "Dijital PR, sosyal medya platformları ve web siteleri üzerinden işletmelerin...",
      "Bir dijital ajans arama motorları, e ticaret, web sitesi tasarımı gibi birçok alanda hizmet...",
      "Online itibar yönetimi, markanızla dijital dünyada ortaya çıkan algıyı profesyonel şekilde yönetmek...",
    ],
  };

  return (
    <div className="sectioncard">
      <div className="container">
        <div className="sectioncard__hero">
          <div className="sectioncard__card">
            <img src={card.img[0]} />
            <span className="sectioncard--span">{card.span[0]}</span>
            <h4 className="sectioncard--title">{card.title[0]}</h4>
            <p className="sectioncard--parag">{card.parag[0]}</p>
            <a href="#" className="sectioncard--link">
              Devamını Oku{" "}
              <img src={"./img/null.png"} className="sectioncard--img" />
            </a>
          </div>
          <div className="sectioncard__card">
            <img src={card.img[1]} />
            <span className="sectioncard--span">{card.span[1]}</span>
            <h4 className="sectioncard--title">{card.title[1]}</h4>
            <p className="sectioncard--parag">{card.parag[1]}</p>
            <a href="#" className="sectioncard--link">
              Devamını Oku{" "}
              <img src={"./img/null.png"} className="sectioncard--img" />
            </a>
          </div>
          <div className="sectioncard__card">
            <img src={card.img[2]} />
            <span className="sectioncard--span">{card.span[0]}</span>
            <h4 className="sectioncard--title">{card.title[2]}</h4>
            <p className="sectioncard--parag">{card.parag[2]}</p>
            <a href="#" className="sectioncard--link">
              Devamını Oku{" "}
              <img src={"./img/null.png"} className="sectioncard--img" />
            </a>
          </div>
          <div className="sectioncard__card">
            <img src={card.img[3]} />
            <span className="sectioncard--span">{card.span[0]}</span>
            <h4 className="sectioncard--title">{card.title[3]}</h4>
            <p className="sectioncard--parag">{card.parag[3]}</p>
            <a href="#" className="sectioncard--link">
              Devamını Oku{" "}
              <img src={"./img/null.png"} className="sectioncard--img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;

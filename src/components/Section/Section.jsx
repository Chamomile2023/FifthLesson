import React from "react";
import "./Section.scss";

const Section = () => {
  let text = {
    title: [
      "Web Tasarım",
      "Dijital Pazarlama",
      "Prodüksiyon",
      "Web Tasarım",
      "Dijital Pazarlama",
      "Prodüksiyon",
    ],
    parag: [
      "Var olan veya yeni kurulan işletmenizin, modern bir kurumsal kimliğe sahip olması için web sitesi.",
      "Web sitenizin veya işletmenizin, daha popüler hale gelmesi için çeşitli hizmetler sunuyoruz.",
      "İşletmenizin tanıtımının daha güzel hale gelmesi için, fotoğraf çekimi ve prodüksiyon yapıyoruz.",
      "Var olan veya yeni kurulan işletmenizin, modern bir kurumsal kimliğe sahip olması için web sitesi.",
      "Web sitenizin veya işletmenizin, daha popüler hale gelmesi için çeşitli hizmetler sunuyoruz.",
      "İşletmenizin tanıtımının daha güzel hale gelmesi için, fotoğraf çekimi ve prodüksiyon yapıyoruz.",
    ],
  };

  return (
    <div className="section">
      <div className="container">
        <div className="section__hero">
          <div className="section__first">
            <img src="./img/section_img.png" />
          </div>
          <div className="section__second">
            <div className="heading">
              <h3 className="section--title">{text.title[0]}</h3>
              <p className="section--parag">{text.parag[0]}</p>
            </div>
            <div className="heading">
              <h3 className="section--title">{text.title[1]}</h3>
              <p className="section--parag">{text.parag[1]}</p>
            </div>
            <div className="heading">
              <h3 className="section--title">{text.title[2]}</h3>
              <p className="section--parag">{text.parag[2]}</p>
            </div>
            <div className="heading">
              <h3 className="section--title">{text.title[3]}</h3>
              <p className="section--parag">{text.parag[3]}</p>
            </div>
            <div className="heading">
              <h3 className="section--title">{text.title[4]}</h3>
              <p className="section--parag">{text.parag[4]}</p>
            </div>
            <div className="heading">
              <h3 className="section--title">{text.title[5]}</h3>
              <p className="section--parag">{text.parag[5]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;

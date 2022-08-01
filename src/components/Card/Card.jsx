import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="container">
        <div className="card__hero">
          <p className="card--greeting">Assalomu alaykum</p>
          <h2 className="card--title">
            Web sitesi ve Kurumsal Kimlik Tasarımları
          </h2>
          <p className="card--parag">
            Online dünyadaki yüzünüz olan web sitelerinizi tasarlar. E-ticaret
            siteleri dahil olmak üzere tüm ihyitaçlarınıza çözümler sunar.
          </p>
        </div>
        <div className="card__numbers">
          <span className="card--span">1</span>
          <span className="card--span">2</span>
          <span className="card--span">3</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

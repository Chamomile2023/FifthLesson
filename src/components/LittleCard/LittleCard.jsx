import React from "react";
import "./LittleCard.scss";

const LittleCard = (props) => {
  return (
    <div className="littlecard">
      <div className="littlecard__hero">
        <div className="littlecard--card">
          <img className="littlecard--img" src={props.img} />
          <h4 className="littlecard--title">{props.title}</h4>
          <p className="littlecard--parag">
            Belirlenen strateji ile tasarımın ve yazılımın oluşturulması
            sağlanır.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LittleCard;

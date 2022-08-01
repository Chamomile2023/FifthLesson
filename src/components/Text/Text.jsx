import React from "react";
import "./Text.scss";

const Text = (props) => {
  return (
    <div className="text">
      <div className="container">
        <div className="text__hero">
          <p className="text--little">
            Neler <span className="text--span">Yapıyoruz</span>
          </p>
          <h3 className="text--title">{props.title}</h3>
          <p className="text--parag">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Text;

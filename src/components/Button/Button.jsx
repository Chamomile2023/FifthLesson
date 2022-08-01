import React from "react";
import "./Button.scss";

const Button = () => {
  let value = {
    btn: [
      "Hepsini Gör",
      "Web Tasarım",
      "Kurumsal Kimlik Tasarımı",
      "SEO",
      "Dijital Pazarlama",
    ],
  };

  return (
    <div className="button">
      <div className="container">
        <div className="button__hero">
          <button className="button--btn">{value.btn[0]}</button>
          <button className="button--btn">{value.btn[1]}</button>
          <button className="button--btn">{value.btn[2]}</button>
          <button className="button--btn">{value.btn[3]}</button>
          <button className="button--btn">{value.btn[4]}</button>
        </div>
      </div>
    </div>
  );
};

export default Button;

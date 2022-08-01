import React from "react";
import "./Cards.scss";
import LittleCard from "../LittleCard/LittleCard";

const Cards = () => {
  let littleCard1 = {
    img: "../img/one.png",
    title: "Keşif ve Planlama",
  };
  let littleCard2 = {
    img: "./img/two.png",
    title: "Tasarım ve Geliştirme",
  };
  let littleCard3 = {
    img: "./img/three.png",
    title: "Test ve Yayına Alma",
  };

  return (
    <div className="cards">
      <LittleCard img={littleCard1.img} title={littleCard1.title} />
      <LittleCard img={littleCard2.img} title={littleCard2.title} />
      <LittleCard img={littleCard3.img} title={littleCard3.title} />
    </div>
  );
};

export default Cards;

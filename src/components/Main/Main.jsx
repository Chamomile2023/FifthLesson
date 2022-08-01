import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Cards from "../Cards/Cards";
import Section from "../Section/Section";
import SectionCard from "../SectionCard/SectionCard";
import SectionText from "../SectonText/SectionText";
import Text from "../Text/Text";
import Footer from "../Footer/Footer";
import "./Main.scss";

const Main = () => {
  let text1 = {
    title: "Sizin için neler yapıyoruz?",
    text: "360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.",
  };

  let text2 = {
    title: "Öğreniyoruz, sizinle paylaşıyoruz.",
    text: "Alanında uzman yazar arkadaşlarımızın, bilgi paylaşımı yaptıkları yazıları inceleyelim.",
  };
  return (
    <div>
      <Card />
      <Text title={text1.title} text={text1.text} />
      <Cards />
      <SectionText />
      <Text title={text2.title} text={text2.text} />
      <Section />
      <Text title={text2.title} text={text2.text} />
      <Button />
      <SectionCard />
      <Footer />
    </div>
  );
};

export default Main;

import { C_Trendding, Container_Midle } from "./styled";

import Image1 from "../../../assets/images/grid/image1.png";
import Image2 from "../../../assets/images/grid/image2.png";
import { CheckCircle } from "phosphor-react";

export const Trending = () => {
  const japonese_sushi = [
    "Maki Sushi",
    "Nigiri Sushi",
    "Oshizushi",
    "Temaki Sushi",
    "Uramaki Sushi",
    "Inari Sushi",
  ];
  const japonese_drink = [
    "Oruncha",
    "Ofukucha",
    "Sakura Tea",
    "Kombu-cha",
    "Aojiru",
    "Mugicha",
  ];

  return (
    <C_Trendding>
      <Container_Midle>DISCOVER</Container_Midle>

      <div className="container list">
        <h3 className="subtitle">What’s Trending / トレンド</h3>
        <h2 className="title">Japanese Sushi</h2>
        <p className="content">Feel the taste of most delicious Sushi here.</p>
        <ul className="list">
          {japonese_sushi.map((item, index) => {
            return (
              <li key={index} className="list--item">
                <CheckCircle size={20} color="#B1454A" weight="fill" />
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="container decoration">
        <img className="image" src={Image1} alt="" />
        <p className="text first">ツ ナ</p>
      </div>
      <div className="container decoration">
        <img className="image" src={Image2} alt="" />
        <p className="text second">飲 む</p>
      </div>
      <div className="container list">
        <h3 className="subtitle">What’s Trending / トレンド</h3>
        <h2 className="title">Japanese Drinks</h2>
        <p className="content">Feel the taste of most delicious Sushi here.</p>
        <ul className="list">
          {japonese_drink.map((item, index) => {
            return (
              <li key={index} className="list--item">
                <CheckCircle size={20} color="#B1454A" weight="fill" />
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </C_Trendding>
  );
};

import {
  Button,
  Button_Explore,
  C_Foods,
  Card_Primary,
  Card_Secondary,
} from "./styled";
import Danggoo from "../../../assets/images/types-pratos/danggo.png";
import Ramen from "../../../assets/images/types-pratos/ramen.png";
import Sushi from "../../../assets/images/types-pratos/sushi.png";
import Udon from "../../../assets/images/types-pratos/udon.png";

import Carrousel_Sushi from "../../../assets/images/carrousel/sushi.png";
import Carrousel_Chezu from "../../../assets/images/carrousel/chezu.png";
import Carrousel_Ramen from "../../../assets/images/carrousel/ramen.png";

import {
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowRight,
  Star,
} from "phosphor-react";

export const Foods = () => {
  const typesPratos = [
    {
      image: "",
      prato: "All",
    },
    {
      image: Danggoo,
      prato: "Danggoo",
    },
    {
      image: Ramen,
      prato: "Ramen",
    },
    {
      image: Sushi,
      prato: "Sushi",
    },
    {
      image: Udon,
      prato: "Udon",
    },
    {
      image: "",
      prato: "Others",
    },
  ];

  const carrousel = [
    {
      image: Carrousel_Chezu,
      title_prato: "Chezu Sushi",
      point: "4.7",
      price: "16.00",
    },
    {
      image: Carrousel_Sushi,
      title_prato: "Originale Sushi",
      point: "4.8",
      price: "21.00",
    },
    {
      image: Carrousel_Ramen,
      title_prato: "Ramen Legendo",
      point: "4.7",
      price: "16.00",
    },
  ];

  return (
    <C_Foods>
      <h2 className="title">Popular Foods / 人気 </h2>
      <div className="tipos">
        {typesPratos.map((item, index) => {
          return (
            <Button key={index} prato={item.prato} image={item.image}>
              {" "}
              {item.image && (
                <img
                  src={item.image}
                  alt={` imagem ${item.prato}`}
                  className="imagem"
                />
              )}
              {item.prato}
            </Button>
          );
        })}
      </div>
      <div className="carrosel">
        <ArrowCircleRight
          className="arrow-right"
          size={50}
          color="#fafafa"
          weight="thin"
        />
        <ArrowCircleLeft
          className="arrow-left"
          size={50}
          color="#fafafa"
          weight="thin"
        />
        {carrousel.map((item, index) => {
          return index == 1 ? (
            <Card_Primary key={index} destaque={index}>
              <img src={item.image} alt={item.title_prato} className="image" />
              <h3 className="title">{item.title_prato}</h3>
              <div className="star-value">
                <span className="satifation">
                  <Star size={18} color="#F9B043" weight="fill" />
                  <p className="point">{item.point}</p>
                </span>
                <p className="price">${item.price}</p>
              </div>
            </Card_Primary>
          ) : (
            <Card_Secondary key={index} destaque={index}>
              <img src={item.image} alt={item.title_prato} className="image" />
              <h3 className="title">{item.title_prato}</h3>
              <div className="star-value">
                <span className="satifation">
                  <Star size={18} color="#F9B043" weight="fill" />
                  <p className="point">{item.point}</p>
                </span>
                <p className="price">${item.price}</p>
              </div>
            </Card_Secondary>
          );
        })}
      </div>
      <div className="explorer">
        <Button_Explore>
          Explore Foods
          <ArrowRight size={20} color="#ffffff" weight="light" />
        </Button_Explore>
      </div>
    </C_Foods>
  );
};

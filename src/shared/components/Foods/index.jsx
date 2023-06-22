import {
  Button,
  Button_Explore,
  C_Foods,
  Card_Primary,
  Card_Secondary,
} from "./styled";

import { Imagens } from "../../../assets/data/images.js";

import {
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowRight,
  Star,
} from "phosphor-react";

export const Foods = () => {
  return (
    <C_Foods>
      <h2 className="title">Popular Foods / 人気 </h2>
      <div className="tipos">
        <Button prato={"All"}>All</Button>
        {Imagens[0].types_pratos.map((item, index) => {
          return (
            <Button key={index} prato={item.name} image={item.img}>
              {" "}
              {item.name && (
                <img
                  src={item.img}
                  alt={` imagem ${item.name}`}
                  className="imagem"
                />
              )}
              {item.name}
            </Button>
          );
        })}
        <Button>Others</Button>
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
        {Imagens[1].carrousel.map((item, index) => {
          return index == 1 ? (
            <Card_Primary key={index} destaque={index}>
              <img src={item.img} alt={item.title_prato} className="image" />
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
              <img src={item.img} alt={item.title_prato} className="image" />
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

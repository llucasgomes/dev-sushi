import { Play } from "phosphor-react";
import { Button, C_Hero } from "./styled";
import Image_sushi from "../../../assets/Asset 1.png";
import Profile from "../../../assets/profile.png";

export const Hero = () => {
  return (
    <C_Hero>
      <div className="container-left">
        <img className="image-sushi" src={Image_sushi} alt="imagem de sushi" />
        <p className="text-one">日 本 食</p>
        <p className="text-two">日本食</p>
      </div>
      <div className="container-right">
        <h1 className="title">Feel the taste of Japanese foods</h1>
        <p className="subtitle">
          Feel the taste of most populars Japanese foods from anywhere and
          anytime.
        </p>
        <div className="container-button">
          <Button>Order Now</Button>
          <Button play="play">
            <div className="container-icon">
              <Play size={18} color="#121212" weight="fill" />
            </div>
            <p>How to Order</p>
          </Button>
        </div>
        <footer className="hero-footer">
          <div className="hero-footer--left">
            <p className="item">24K+</p>
            <p className="item">Happy Customer</p>
          </div>
          <div className="hero-footer--rigth">
            <img className="item" src={Profile} alt="profile" />
            <p className="item">
              “This is the best Japanese food delivery service that ever exist”
            </p>
          </div>
        </footer>
      </div>
    </C_Hero>
  );
};

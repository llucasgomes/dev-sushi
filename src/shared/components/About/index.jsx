import { C_About } from "./styled";
import Sushi1 from "../../../assets/sushi1.png";
import Sushi2 from "../../../assets/sushi2.png";

export const About = () => {
  return (
    <C_About>
      <div className="container-left">
        <div className="item-sushi">
          <img className="image" src={Sushi1} alt="imagem de sushi" />
          <p className="text">ツ ナ</p>
        </div>
        <div className="item-sushi">
          <img className="image" src={Sushi2} alt="imagem de sushi" />
          <p className="text">エ ビ</p>
        </div>
      </div>
      <div className="container-rigth">
        <h3 className="subtitle">About Us / 私たちに関しては</h3>
        <h2 className="title">
          Our mission is to bring true Japanese flavours to you.
        </h2>
        <p className="content">
          We will continue to provide the experience of Omotenashi, the Japanese
          mindset of hospitality, with our shopping and dining for our
          customers.
        </p>
      </div>
    </C_About>
  );
};

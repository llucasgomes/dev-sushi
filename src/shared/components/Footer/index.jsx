import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";
import { C_Footer } from "./styled";

export const Footer = () => {
  return (
    <C_Footer>
      <p className="logo-name">
        SUSHI<span>MAN</span>
      </p>

      <nav className="menu">
        <ul className="list">
          <li className="list--item">menu</li>
          <li className="list--item">foods</li>
          <li className="list--item">services</li>
          <li className="list--item">about</li>
        </ul>
      </nav>
      <ul className="list-redes">
        <li className="logo-social">
          <FacebookLogo size={32} color="#737373" weight="fill" />
        </li>
        <li className="logo-social">
          <TwitterLogo size={32} color="#737373" weight="fill" />
        </li>
        <li className="logo-social">
          <InstagramLogo size={32} color="#737373" weight="fill" />
        </li>
      </ul>
    </C_Footer>
  );
};

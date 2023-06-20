import { MagnifyingGlass } from "phosphor-react";
import { C_NavBar } from "./styled";

export const NavBar = () => {
  return (
    <C_NavBar>
      <div className="logo-name">Sushi Dev</div>
      <nav className="menu">
        <ul className="list">
          <li className="list--item">menu</li>
          <li className="list--item">foods</li>
          <li className="list--item">services</li>
          <li className="list--item">about</li>
          <li className="list--item">
            <MagnifyingGlass size={24} color="#ffff" />
          </li>
        </ul>
      </nav>
    </C_NavBar>
  );
};

import { List, MagnifyingGlass, X } from "phosphor-react";
import { C_NavBar } from "./styled";
import { useState } from "react";

export const NavBar = () => {
  const [show, setShow] = useState(true);
  const [closed, setClosed] = useState(false);

  const show_btn = () => {
    setShow(!show);
    setClosed(!closed);
  };

  return (
    <C_NavBar>
      <div className="logo-name">Sushi Dev</div>
      <nav className="menu">
        <ul className="list">
          <li className="list--item">menu</li>
          <li className="list--item">foods</li>
          <li className="list--item">services</li>
          <li className="list--item">about</li>
          {/*  <li className="list--item">
            <MagnifyingGlass size={24} color="#000000" />
          </li> */}
        </ul>
        {show && (
          <button onClick={() => show_btn()}>
            <List size={24} color="#000000" weight="fill" />
          </button>
        )}
      </nav>
      {closed && (
        <button onClick={() => show_btn()}>
          <X size={24} color="#000000" />
        </button>
      )}
    </C_NavBar>
  );
};

import styled from "styled-components";
import { C_NavBar } from "../Navbar/styled.js";

export const C_Footer = styled(C_NavBar)`
  position: static;
  background-color: #fff0de;

  .logo-name {
    font-family: "Playfair Display";
    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;
    color: #b1454a;
    opacity: 0.9;

    span {
      font-size: 2rem;
      color: #000000;
    }
  }

  .list-redes {
    display: flex;
    list-style-type: none;

    .logo-social {
      padding: 0 1rem;
      color: #474747;
      cursor: pointer;
    }
  }
`;

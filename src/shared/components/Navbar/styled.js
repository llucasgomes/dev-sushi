import styled from "styled-components";

export const C_NavBar = styled.header`
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100vw;
  height: 7rem;
  padding: 0 5rem 0 5rem 0;
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .logo-name {
    font-weight: 700;
    font-size: 2.4rem;
    text-transform: uppercase;
    color: #ffffff;
    opacity: 0.8;
  }
  .menu {
    text-transform: uppercase;

    .list {
      display: flex;
      text-decoration: none;
      list-style-type: none;
      justify-content: center;
      align-items: center;

      .list--item {
        padding: 0 2rem;
        cursor: pointer;
        font-size: 1.6rem;
        font-weight: 500;
        font-family: "Plus Jakarta Sans", sans-serif;

        .icon {
          border: 2px solid black;
        }
      }
    }
  }
`;

import styled from "styled-components";

export const C_NewLetter = styled.section`
  position: relative;
  width: 100vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: #b1454a;

  .content {
    width: 20rem;
    height: 100%;
    position: absolute;

    font-family: "Arial";
    font-weight: 700;
    font-size: 10rem;
    line-height: 12rem;
    color: #ffffff;
    opacity: 0.05;
  }
  .content.left {
    left: 6rem;
  }
  .content.right {
    right: 6rem;
  }

  .title {
    width: 74rem;
    font-family: "Playfair Display";
    font-weight: 600;
    font-size: 8rem;
    line-height: 100%;
    text-align: center;
    color: #ffffff;
  }
  .description {
    font-family: "Plus Jakarta Sans";
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 200%;
    letter-spacing: -0.01em;
    color: #ffffff;
    opacity: 0.8;
  }

  .container {
    position: relative;

    width: 45rem;
    display: flex;
    justify-content: center;
  }
`;

export const S_Input = styled.input`
  width: 45rem;
  height: 4.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 0.1rem solid #ffffff;
  border-radius: 4rem;
  opacity: 0.5;
  outline: none;

  font-family: "Plus Jakarta Sans";
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 200%;
  color: #ffffff;
  padding: 2rem;

  ::placeholder {
    font-family: "Plus Jakarta Sans";
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 200%;
    color: rgba(255, 255, 255, 0.5);
    padding: 2rem;
  }
`;

export const S_Button = styled.button`
  position: absolute;
  width: 40%;
  height: 90%;
  top: 50%;
  transform: translate(73%, -50%);
  border-radius: 4rem;
  border: none;

  font-family: "Plus Jakarta Sans";
  font-weight: 500;
  font-size: 16px;
  background-color: #000000;
  text-transform: capitalize;
  color: #ffffff;

  cursor: pointer;
`;

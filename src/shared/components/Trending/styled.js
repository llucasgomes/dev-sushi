import styled from "styled-components";

export const C_Trendding = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .container {
    width: 50%;
    height: 50%;
    padding: 2rem 5rem;
  }
  .container:nth-child(3n + 1) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    background-color: #ffffff;

    .subtitle {
      width: 100%;
      padding: 0 3rem;
      font-family: "Plus Jakarta Sans";
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 200%;
      letter-spacing: -0.01em;
      color: #b1454a;
      opacity: 0.8;
    }
    .title {
      width: 100%;
      padding: 0 3rem;
      font-family: "Playfair Display";
      font-style: normal;
      font-weight: 600;
      font-size: 5rem;
      line-height: 140%;
      color: #121212;
    }
    .content {
      width: 100%;
      padding: 0 3rem;
      font-family: "Plus Jakarta Sans";
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 200%;
      letter-spacing: -0.01em;
      color: #121212;
      opacity: 0.8;
    }

    .list {
      list-style-type: none;
      width: 50%;
      display: flex;
      flex-wrap: wrap;

      .list--item {
        width: 50%;
        display: flex;
        align-items: center;
        gap: 1rem;

        font-family: "Plus Jakarta Sans";
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 200%;
        color: #121211;
      }
    }
  }
  .container:not(:nth-child(3n + 1)) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    background: #fff0de;

    .image {
      width: 20%;
    }

    .text {
      position: absolute;
      top: 2rem;
      width: 10rem;
      font-family: "Arial";
      font-weight: 700;
      font-size: 10rem;
      line-height: 13rem;
      color: #b1454a;
      opacity: 0.1;
    }

    .text.first {
      right: 5rem;
    }
    .text.second {
      left: 5rem;
    }
  }
`;

export const Container_Midle = styled.div`
  position: absolute;
  z-index: 9999;
  width: 10rem;
  height: 10rem;
  background: #000000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-family: "Plus Jakarta Sans";
  color: #ffffff;
`;

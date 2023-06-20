import styled from "styled-components";

export const C_About = styled.section`
  width: 100vw;
  height: calc(100vh - 7rem);
  display: flex;

  .container-left {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .item-sushi {
      position: relative;
      width: 100%;
      height: 49%;
      background-color: #fff0de;
      display: flex;

      .image {
        position: absolute;
        width: 18rem;
        top: 5rem;
        left: 20%;
      }
      .text {
        position: absolute;
        top: 4rem;
        right: 5rem;
        width: 10rem;
        font-size: 7rem;
        font-weight: 700;
        color: #b1454a;
        opacity: 0.1;
      }
    }
  }
  .container-rigth {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    padding: 0 7rem;

    .subtitle {
      width: 100%;
      text-align: left;
      font-size: 1.8rem;
      font-weight: 400;
      color: #b1454a;
      opacity: 0.8;
    }

    .title {
      font-family: "Playfair Display";
      font-weight: 600;
      font-size: 6.6rem;
      color: #121212;
    }

    .content {
      font-family: "Plus Jakarta Sans";
      font-weight: 400;
      font-size: 1.8rem;
      color: #121212;
      opacity: 0.8;
    }
  }
`;

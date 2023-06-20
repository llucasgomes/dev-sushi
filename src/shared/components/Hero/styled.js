import styled from "styled-components";

export const C_Hero = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;

  .container-left {
    position: relative;
    padding-top: 7rem;
    min-width: 40%;
    height: 100vh;
    background-color: #b1454a;

    .image-sushi {
      position: absolute;
      left: 0;
      width: 80%;
      z-index: 1;
    }
    .text-one {
      position: absolute;
      font-size: 9rem;
      font-weight: 700;
      color: #fff0de;
      left: 3rem;
      bottom: 0;
      width: 8rem;
      line-height: 11rem;
    }
    .text-two {
      position: absolute;
      z-index: 0;
      width: 18rem;
      font-size: 18rem;
      line-height: 20rem;
      font-weight: 700;
      color: #fff0de;
      opacity: 0.26;
      right: 1.6rem;
      top: -8rem;
    }
  }
  .container-right {
    min-width: 60%;
    padding-top: 5rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .title {
      margin-top: 5%;
      text-align: center;
      font-size: 8.8rem;
      font-weight: 600;
      font-family: "Playfair Display";
      font-style: normal;
    }
    .subtitle {
      font-family: "Plus Jakarta Sans";
      font-weight: 400;
      font-size: 1.8rem;
      text-align: center;
    }
    .container-button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      padding: 1.8rem;

      .container-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #959393;
        padding: 0.5rem;
        border-radius: 50%;
      }
    }
    .hero-footer {
      width: 100%;
      height: 9rem;
      background-color: #fff0de;
      /*       padding: 2rem 5rem;
 */
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      /*  gap: 3rem; */
      .hero-footer--left {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .item:nth-child(1) {
          font-size: 5rem;
          font-family: "Playfair Display";
        }
        .item:nth-child(2) {
          margin-left: 1rem;
          width: 10%;
          text-align: right;
          font-size: 2rem;
          color: #121211;
          opacity: 0.5;
          font-family: "Playfair Display";
        }
      }
      .hero-footer--rigth {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        .item:nth-child(1) {
          width: 5rem;
        }
        .item:nth-child(2) {
          font-size: 1.6rem;
          font-weight: 600;
          font-style: italic;
          text-align: center;
          font-family: "Plus Jakarta Sans";
          color: #121212;
          opacity: 0.8;
        }
      }
    }
  }
`;
export const Button = styled.button`
  width: auto;
  height: 3.4rem;
  padding: 0 2.5rem;
  background-color: ${(props) =>
    props.play == "play" ? "#ffffff" : "#121212"};
  ${(props) =>
    props.play == "play"
      ? "display: flex;justify-content: center;align-items: center;"
      : null}

  border: none;
  border-radius: 3.6rem;
  color: ${(props) => (props.play == "play" ? "#121212" : "#ffffff")};
  font-size: 1.6rem;
  gap: 1rem;
  cursor: pointer;
  p {
    font-size: 1.6rem;
  }
`;

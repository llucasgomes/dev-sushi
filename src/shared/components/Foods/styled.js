import styled from "styled-components";

export const C_Foods = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 5rem 7rem;
  background-color: #b1454a;

  .title {
    font-family: "Playfair Display";
    font-weight: 600;
    font-size: 4.6rem;
    line-height: 140%;
    text-align: center;
    color: #ffffff;
  }

  .tipos {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 2rem;
    gap: 1rem;
  }

  .carrosel {
    position: relative;
    width: 100%;
    height: 30rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 5rem;
    padding-bottom: 2rem;

    .arrow-right,
    .arrow-left {
      position: absolute;
      top: 50%;
      cursor: pointer;
    }
    .arrow-right {
      right: 15%;
    }
    .arrow-left {
      left: 15%;
    }
  }

  .explorer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`
  width: ${(props) => (props.prato == "All" ? "10rem" : "14rem")};
  height: 5rem;
  display: flex;
  justify-content: space-evenly;
  background: ${(props) =>
    props.prato == "All" ? "#ffffff" : "rgba(255, 255, 255, 0.05)"};
  border: 0.1rem solid rgba(255, 255, 255, 0.2);
  border-radius: 4rem;
  align-items: center;
  font-family: "Plus Jakarta Sans";
  font-size: 1.5rem;
  color: ${(props) => (props.prato == "All" ? "#b1454a" : "#ffffff")};
  cursor: pointer;

  .imagem {
    width: 3.5rem;
  }
`;

export const Card_Primary = styled.div`
  width: 20rem;
  height: 90%;
  background-color: #ffffff;
  border-radius: 3rem;
  padding: 2rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  cursor: pointer;

  .image {
    width: 90%;
  }
  .title {
    font-family: "Playfair Display";
    font-weight: 600;
    font-size: 2rem;
    line-height: 4rem;
    text-align: center;
    letter-spacing: -0.01em;
    color: #555555;
  }

  .star-value {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    .satifation {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      .point {
        font-size: 1.5rem;
        font-family: "Plus Jakarta Sans";
        font-weight: 400;
        line-height: 3rem;
        letter-spacing: -0.01em;
        color: #888888;
        margin-left: 1rem;
      }
    }

    .price {
      font-family: "Plus Jakarta Sans";
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 30px;
      letter-spacing: -0.01em;

      color: #121212;
    }
  }
`;

export const Card_Secondary = styled.div`
  width: 18rem;
  height: 70%;
  background-color: #b1454a;
  border-radius: 3rem;
  padding: 2rem 2rem;

  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  cursor: pointer;

  .image {
    width: 70%;
  }
  .title {
    font-family: "Playfair Display";
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 4rem;
    text-align: center;
    letter-spacing: -0.01em;
    color: #ffffff;
  }

  .star-value {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .satifation {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      .point {
        font-size: 1.1rem;
        font-family: "Plus Jakarta Sans";
        font-weight: 400;
        line-height: 3rem;
        letter-spacing: -0.01em;
        color: #ffffff;
        margin-left: 0.5rem;
      }
    }

    .price {
      font-family: "Plus Jakarta Sans";
      font-weight: 600;
      font-size: 1.1rem;
      line-height: 30px;
      letter-spacing: -0.01em;
      color: #ffffff;
    }
  }
`;

export const Button_Explore = styled.button`
  width: auto;
  height: 5rem;
  padding: 0 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border: none;
  border-radius: 4rem;

  font-family: "Plus Jakarta Sans";
  font-size: 1.3rem;
  color: #ffffff;

  background-color: #000000;

  cursor: pointer;
`;

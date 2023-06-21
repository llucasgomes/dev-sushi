import { C_NewLetter, S_Button, S_Input } from "./styled";

export const NewLetter = () => {
  return (
    <C_NewLetter>
      <p className="content left">司 エ ナ</p>
      <p className="content right">日 本 食</p>
      <h2 className="title">Get offers straight to your inbox</h2>
      <p className="description">Sign up for the Sushiman newsletter.</p>
      <div className="container">
        <S_Input placeholder="Enter email address" />
        <S_Button>Get Started</S_Button>
      </div>
    </C_NewLetter>
  );
};

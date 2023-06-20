import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

      
    *{
        margin: 0;
        padding: 0;
        font-family: "Playfair Display", serif;
        box-sizing:border-box;
        font-size: 62.5%;
        
    }
    #root{
        /* margin:0 auto; */
        overflow-x: hidden;
        
        
    }
    body{
        position: relative;
    }
   
    
`;

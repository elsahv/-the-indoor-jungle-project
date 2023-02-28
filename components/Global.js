import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Teko', sans-serif;
    scroll-behavior: smooth;
    
  }

  html {
    scroll-behavior: smooth;
  }
 
  section {
    padding: 20px;

  @media only screen and (max-width: 1024px) {
    padding: 10px;
  }
  }
  p {
    line-height: 1.5;
  }

`;

export default GlobalStyles;

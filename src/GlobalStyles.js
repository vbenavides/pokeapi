import { createGlobalStyle } from 'styled-components';

export const Media = {
  desktop: `@media(min-width: 480px)`,
};

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  html {
    font-size: 62.5%;
    background-color: gray;
    background-color: #313131;
  }

  body {

    ${'' /* font-family: 'Roboto', sans-serif; */}
  }

`;

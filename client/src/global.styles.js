import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    }

    body {
        font-family: 'Open Sans Condensed', sans-serif;
        padding: 5px 50px;

        @media only screen and (max-width: 600px) {
            padding: 0;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

`;
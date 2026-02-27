import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', 'Roboto', 'Arial';
    }

    body {
        background-color: #1D2128;
    }

    hr {
        background-color: rgba(229, 229, 229, 0.2);
        border: 1px solid rgba(229, 229, 229, 0.2);
    }
`;

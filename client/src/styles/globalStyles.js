import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        box-sizing: border-box;
    }

    main {
        width: calc(90vw);
        left: 175px;
        position: relative;
    }

    body {
        background: ${({theme}) => theme.bg2};
        color: ${({theme}) => theme.text};
        font-family: 'Roboto', sans-serif;
        letter-spacing: .6px;
    }
`
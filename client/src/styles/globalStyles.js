import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        box-sizing: border-box;
    }

    main {
        width: 100%;
        left: 160px;
        position: relative;
    }

    body {
        background: ${({theme}) => theme.bg2};
        color: ${({theme}) => theme.text};
        font-family: 'Roboto', sans-serif;
        letter-spacing: .6px;
    }
`
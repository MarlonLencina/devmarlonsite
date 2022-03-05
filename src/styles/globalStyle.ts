import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
}

body {
    background-color: ${props => props.theme.COLORS.cian};
}

`

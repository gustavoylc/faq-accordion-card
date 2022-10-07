import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --veryDarkDesaturatedBlue: hsl(238, 29%, 16%);
    --softRed: hsl(14, 88%, 65%);
    --softViolet: hsl(273, 75%, 66%);
    --softBlue: hsl(240, 73%, 65%);
    --veryDarkGrayishBlue: hsl(237, 12%, 33%);
    --darkGrayishBlue: hsl(240, 6%, 50%);
    --lightGrayishBlue: hsl(240, 5%, 91%);
    --sm: 11px;
    --md:12px;
    --lg:2.5em;
    --fontFamily: 'Kumbh Sans', sans-serif;

}
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}
body{
    min-width: 375px;
    min-height: 100vh;
    font-family: var(--fontFamily);
    background-image: ${(themes) => themes.theme.bg};
    color: ${(themes) => themes.theme.color};
    font-size: var(--md);
    font-weight: 400;
}
`;

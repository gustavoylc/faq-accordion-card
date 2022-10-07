import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const themes = {
	light: {
		bg: "#ceceff",
		color: "#335",
	},
	dark: {
		bg: "linear-gradient(180deg, var(--softViolet) 0, var(--softBlue) 100%)",
		color: "var(--veryDarkGrayishBlue)",
	},
};

export const Theme = (props) => (
	<ThemeProvider theme={themes[props.theme.toLowerCase()]}>
		<GlobalStyle />
		{props.children}
	</ThemeProvider>
);
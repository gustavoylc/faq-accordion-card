import React from "react";
import { Theme } from "./styles/Theme";
import { FAQ } from "@pages/FAQ";


export const App = () => {
	const [theme, setTheme] = React.useState("dark");
	return (
		<Theme theme={theme}>
			<FAQ />
		</Theme>
	);
};

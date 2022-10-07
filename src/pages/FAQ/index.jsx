import React, { Fragment } from "react";
import { FooterContainer, StyledSection, StyledMain } from "./StyledFAQ.js";
import { Card } from "@components/Card";
export const FAQ = () => {
	return (
		<StyledMain>
			<StyledSection>
				<Card />
			</StyledSection>
			<footer>
				<FooterContainer>
					Challenge by &nbsp;
					<a
						href="https://www.frontendmentor.io?ref=challenge"
						target="_blank"
					>
						Frontend Mentor
					</a>
					. Coded by &nbsp;
					<a href="https://www.frontendmentor.io/profile/gustavoylc">
						Gustavo Leyte-Vidal
					</a>
					.
				</FooterContainer>
			</footer>
		</StyledMain>
	);
};

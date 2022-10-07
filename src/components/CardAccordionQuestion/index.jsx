import React, { useState } from "react";
import Arrow from "@images/icon-arrow-down.svg";
import {
	StyledSummary,
	StyledIcon,
	StyledParagraph,
	StyledSubTitle,
	StyledDetails,
} from "@components/CardAccordionQuestion/StyledCardAccordionQuestion";

export const CardAccordionQuestion = ({ question, answer, open }) => {	
	return (
		<div>
			<StyledDetails
				open={open}
			>
				<StyledSummary>
					<StyledSubTitle>{question}</StyledSubTitle>
					<StyledIcon
						src={Arrow}
						alt="icon"
					/>
				</StyledSummary>
				<StyledParagraph>{answer}</StyledParagraph>
			</StyledDetails>
			<hr />
		</div>
	);
};

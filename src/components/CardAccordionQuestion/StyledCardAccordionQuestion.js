import styled, { css } from "styled-components";

const StyledSummary = styled.summary`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	&:hover {
		cursor: pointer;
	}
`;

const StyledIcon = styled.img`
	width: 14px;
	height: 10px;
`;

const StyledParagraph = styled.p`
	margin: 8px 25px 8px 0;
	line-height: 1.5;
`;

const StyledSubTitle = styled.p`
	margin: 12px 0;
	font-size: 1.1em;
	&:hover {
		color: var(--softRed);
	}
`;

const StyledDetails = styled.details`
	&[open] {
		${StyledSubTitle} {
			font-weight: 700;
		}
		${StyledIcon} {
			transform: rotate(180deg);
			transition: 300ms;
		}
	}
	&:not([open]) {
		${StyledIcon} {
			transition: 300ms;
		}
	}
`;

export {
	StyledSummary,
	StyledIcon,
	StyledParagraph,
	StyledSubTitle,
	StyledDetails,
};

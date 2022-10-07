import styled from "styled-components";
import { useDevices } from "@hooks/useDevices";

const { devices } = useDevices();
const ImageContainer = styled.div`
	position: absolute;
	width: 240px;
	top: -110px;
	left: 13%;
	@media ${devices.laptop} {
		position: relative;
		top: 10px;
		left: -140px;
	}
`;
const StyledContainer = styled.div`
	width: 327px;
	background-color: var(--lightGrayishBlue);
	border-radius: 30px;
	margin-top: 150px;
	padding: 25px;
	@media ${devices.laptop} {
		width: 920px;
		margin-top: 0;
		padding: 70px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		place-content: center;
		min-height: 510px;
		overflow: hidden;
	}
`;

const StyledArticle = styled.article`
	position: relative;

	@media ${devices.laptop} {
	}
`;

const StyledTitle = styled.h1`
	padding-top: 110px;
	text-align: center;
	font-weight: 700;
	font-size: var(--lg);
	color: var(--veryDarkDesaturatedBlue);
	margin-bottom: 15px;
	@media ${devices.laptop} {
		padding-top: 0;
		text-align: start;
	}
`;

const StyledBoxImage = styled.img`
	@media ${devices.laptop} {
		position: absolute;
		top: 200px;
		left: -90px;
		z-index: 20;
	}
`;

export {
	StyledArticle,
	ImageContainer,
	StyledTitle,
	StyledContainer,
	StyledBoxImage,
};

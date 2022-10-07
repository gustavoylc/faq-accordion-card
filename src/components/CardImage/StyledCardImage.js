import styled from "styled-components";
import { useDevices } from "@hooks/useDevices";

const { devices } = useDevices();

export const StyledIllustration = styled.figure`
	position: absolute;
	width: 240px;
	z-index: 10;
`;

export const StyledIllustrationShadow = styled.figure`
	position: absolute;
	width: 240px;
	bottom: -220px;
	z-index: 5;
	@media ${devices.laptop} {
		top: -330px;
		left: -460px;
	}
`;

export const StyledImage = styled.img`	
	@media ${devices.laptop} {
		width: 440px;
	}
`;

export const StyledImageShadow = styled.img`
	@media ${devices.laptop} {
		width: 900px;
	}
`;


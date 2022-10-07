import styled from "styled-components";

const FooterContainer = styled.div`
	font-size: 11px;
	text-align: center;
	margin: 20px auto;
	& a {
		color: hsl(228, 45%, 44%);
        text-decoration: none;;
	}
`;


const StyledMain = styled.main`
	min-height: 100vh;
	display: grid;
	grid-template-rows: 1fr auto;	 
`;

const StyledSection = styled.section`
	place-self: center;
`;



export { FooterContainer, StyledMain, StyledSection };
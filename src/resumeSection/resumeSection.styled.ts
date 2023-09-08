import styled from "styled-components";

export const Intro = styled.div`
	display: flex;
	margin-bottom: 0px;
`;

export const IntroTitle = styled.div`
	width: 60%;
`;

export const IntroTitleName = styled.div`
	font-size: 45px;
`;

export const IntroTitleDesc = styled.div`
	font-size: 14px;
	color: ${({ theme }) => theme.colors.introTitleDesc};
`;

export const IntroLinks = styled.div`
	width: 40%;
`;

export const IntroLink = styled.div`
	text-align: right;
	font-size: 13px;
	margin-top: 2px;

	a:hover {
		color: red;
		text-decoration: underline;
	}
`;

export const SectionTitleLine = styled.div`
	width: 300px;
	height: 3px;
	background-color: ${({ theme }) => theme.colors.introTitleDesc};
	margin-top: 3px;
	margin-bottom: 10px;
`;

export const Section2Col = styled.div`
	display: flex;
	gap: 30px;
	margin-top: 10px;
`;

export const Section2ColLogo = styled.div`
	img {
		width: 69px;
		height: 69px
	}
`;

export const Section2ColDesc = styled.div`

`
export const Section2ColDescTitle = styled.div`
	font-size: 18px;
`;

export const Section2ColDescDesc = styled.div`
`;

export const Section2ColDescDescInner = styled.div`
	font-size: 15px;
`;
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.font};
		font-style: normal;
  	font-weight: 400;
		background-color: ${({ theme }) => theme.colors.surface1};
  }
`;

export default GlobalStyle;

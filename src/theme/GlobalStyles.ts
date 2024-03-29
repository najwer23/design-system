import { createGlobalStyle } from "styled-components";
import "@fontsource/mulish";

const GlobalStyle = createGlobalStyle`
	* {
		/* Include the content box as well as padding and border for precise definitions */
		box-sizing: border-box;
		-moz-box-sizing: border-box;
	}

  body {
    /* margin: 0; */
    /* padding: 0; */
    font-family: ${({ theme }) => theme.font};
		font-style: normal;
  	font-weight: 400;
		background-color: ${({ theme }) => theme.colors.surface1};
		font-size: ${({ theme }) => theme.colors.bodyFontSize};
	}

	@media print {
		html,
		body {
			/* Reset the document's background color */
			background-color: #fff;
		}

		* {
			/* Include the content box as well as padding and border for precise definitions */
			box-sizing: initial;
			-moz-box-sizing: initial;
		}
	}
`;

export default GlobalStyle;

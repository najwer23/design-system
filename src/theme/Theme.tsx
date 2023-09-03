import { ThemeProvider } from "styled-components";
import {
	light,
	dark,
} from "./Theme.styled";

interface Props {
	children: React.ReactNode
}

export const Theme = ({ children }: Props): JSX.Element => {
	return (
		<ThemeProvider theme={dark}>
			{children}
		</ThemeProvider>
	)
}
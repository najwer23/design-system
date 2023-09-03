import { GithubLastMody } from "../github/GithubLastMody"
import { BoxMody, NavContainer, NavUtil, NavUtils } from "./Nav.styled"

export const Nav = (): JSX.Element => {

	return (
		<NavContainer>
			<BoxMody>
				<GithubLastMody />
			</BoxMody>
			<NavUtils>
				<NavUtil >PL</NavUtil>
				<NavUtil $active >EN</NavUtil>
				<NavUtil $bgColor="#038c3e">Download</NavUtil>
			</NavUtils>
		</NavContainer>
	)
}
import { Nav } from "../nav/Nav"
import { PageA4 } from "../pageA4/PageA4"
import { Education } from "../resumeSection/Education"
import { PageIntro } from "../resumeSection/Intro"

export const RoutHomepage = (): JSX.Element => {
	return (
		<>
			<Nav />
			<PageA4>
				<PageIntro />
				<Education />
			</PageA4>
			<PageA4><div>dddd</div></PageA4>
			<PageA4><div>dddd</div></PageA4>
		</>
	)
}
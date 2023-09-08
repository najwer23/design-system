import { Nav } from "../nav/Nav"
import { PageA4 } from "../pageA4/PageA4"
import { Education } from "../resumeSection/Education"
import { Exp } from "../resumeSection/Exp"
import { Intro } from "../resumeSection/Intro"
import { Skills } from "../resumeSection/Skills"

export const RoutHomepage = (): JSX.Element => {
	return (
		<>
			<Nav />
			<PageA4>
				<Intro />
				<Education />
				<Exp title number={4}/>
				<Exp number={3}/>
				<Exp number={2}/>
				<Exp number={1}/>
			</PageA4>
			<PageA4>
				<Skills />
			</PageA4>
			<PageA4><div>dddd</div></PageA4>
		</>
	)
}
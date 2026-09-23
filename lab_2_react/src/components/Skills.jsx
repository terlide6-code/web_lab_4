import { skills } from '../data/skills'
import { Section } from './Section'

function Skills() {
	return (
		<Section>
			<h3 className='mb-4 text-2xl font-bold text-slate-900'>Skills:</h3>
			<ul className='flex flex-wrap gap-2'>
				{skills.map(skill => (
					<li
						className='rounded-lg bg-blue-100 px-3 py-2 font-medium text-blue-800 transition hover:bg-blue-700 hover:text-white'
						key={skill}
					>
						{skill}
					</li>
				))}
			</ul>
		</Section>
	)
}
export default Skills

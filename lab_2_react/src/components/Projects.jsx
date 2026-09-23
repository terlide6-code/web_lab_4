import { projects } from '../data/projects.js'
import { Section } from './Section'

function Projects() {
	return (
		<Section>
			<h3 className='mb-4 text-2xl font-bold text-slate-900'>Projects:</h3>
			<div className='grid gap-4 lg:grid-cols-3'>
				{projects.map(project => (
					<article
						className='rounded-lg border border-slate-200 p-4 transition hover:scale-105 hover:bg-green-50'
						key={project.name}
					>
						<h4 className='text-xl font-bold text-green-700'>{project.name}</h4>
						<p className='mt-2 text-slate-600'>{project.description}</p>
						<p className='mt-3 text-sm font-semibold text-slate-700'>
							{project.stack}
						</p>
					</article>
				))}
			</div>
		</Section>
	)
}

export default Projects

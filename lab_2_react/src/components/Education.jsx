import { Section } from './Section'

function Education() {
	return (
		<Section>
			<h3 className='mb-4 text-2xl font-bold text-slate-900'>Education:</h3>
			<div className='flex flex-col gap-2 rounded-lg border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between'>
				<div>
					<p className='text-lg font-bold text-slate-900'>Cybersecurity</p>
					<p className='text-slate-600'>Lviv Polytechnic National University</p>
				</div>
				<i className='w-fit rounded-md bg-red-500 px-3 py-2 text-sm font-semibold not-italic text-white transition hover:bg-red-600'>
					09/2025 - now
				</i>
			</div>
		</Section>
	)
}
export default Education

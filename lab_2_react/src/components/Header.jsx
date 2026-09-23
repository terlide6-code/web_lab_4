function Header({ theme, toggleTheme }) {
	return (
		<header className='rounded-xl bg-white p-6 shadow-md'>
			<div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
				<div>
					<h1 className='text-3xl sm:text-4xl font-black tracking-wide text-slate-900'>
						Nazarii Perestiuk CV
					</h1>
					<h2 className='mt-2 text-xl font-semibold text-blue-700'>
						Backend Developer
					</h2>
				</div>
				<button className='w-fit rounded-md bg-slate-800 px-4 py-2 font-semibold text-white transition hover:bg-slate-700' onClick={toggleTheme} type='button'>
					{theme === 'light' ? 'Light → Dark' : 'Dark → Light'}
				</button>
			</div>
		</header>
	)
}
export default Header

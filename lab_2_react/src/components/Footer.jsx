import { useEffect, useState } from 'react'

function Footer() {
	const [systemInfo, setSystemInfo] = useState(null)

	useEffect(() => {
		const info = {
			userAgent: navigator.userAgent,
			platform: navigator.platform,
		}

		localStorage.setItem('systemInfo', JSON.stringify(info))
		const savedInfo = JSON.parse(localStorage.getItem('systemInfo'))
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setSystemInfo(savedInfo)
	}, [])

	return (
		<footer className='mt-6 bg-slate-800 px-6 py-5 text-white'>
			<div className='mx-auto flex max-w-4xl flex-col gap-3'>
				<div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
					<p>
						<b>Phone:</b> <i className='not-italic'>+380678015643</i>
					</p>
					<a
						className='w-fit rounded-md bg-blue-600 px-4 py-2 font-semibold transition hover:bg-blue-700'
						href='https://github.com/terlide6-code'
					>
						GitHub Nazarii
					</a>
				</div>
				{systemInfo && (
					<p className='text-sm text-slate-300'>
						<b>System:</b> {systemInfo.platform} · {systemInfo.userAgent}
					</p>
				)}
			</div>
		</footer>
	)
}
export default Footer

import { useEffect, useState } from 'react'

function ContactForm() {
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsOpen(true)
		}, 60000)

		return () => clearTimeout(timer)
	}, [])

	if (!isOpen) {
		return null
	}

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4'>
			<form
				action='https://formspree.io/f/xppwdekg'
				className='w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl'
				method='POST'
			>
				<div className='mb-5 flex items-center justify-between gap-4'>
					<h2 className='text-2xl font-bold text-slate-900'>Contact me</h2>
					<button
						aria-label='Закрити форму'
						className='text-2xl leading-none text-slate-500 hover:text-slate-900'
						onClick={() => setIsOpen(false)}
						type='button'
					>
						×
					</button>
				</div>
				<div className='flex flex-col gap-4'>
					<label className='font-medium text-slate-700'>
						Ім&apos;я
						<input
							className='mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-blue-500'
							name='name'
							required
							type='text'
						/>
					</label>
					<label className='font-medium text-slate-700'>
						Email
						<input
							className='mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-blue-500'
							name='email'
							required
							type='email'
						/>
					</label>
					<label className='font-medium text-slate-700'>
						Телефон
						<input
							className='mt-1 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-blue-500'
							name='phone'
							type='tel'
						/>
					</label>
					<label className='font-medium text-slate-700'>
						Повідомлення
						<textarea
							className='mt-1 min-h-28 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-blue-500'
							name='message'
							required
						/>
					</label>
					<div className='flex justify-end gap-3'>
						<button
							className='rounded-md border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-100'
							onClick={() => setIsOpen(false)}
							type='button'
						>
							Закрити
						</button>
						<button
							className='rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700'
							type='submit'
						>
							Надіслати
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default ContactForm

import { useEffect, useState } from 'react'
import ContactForm from './components/ContactForm.jsx'
import Education from './components/Education.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Projects from './components/Projects.jsx'
import Reviews from './components/Reviews.jsx'
import Skills from './components/Skills.jsx'

function App() {
	const [theme, setTheme] = useState('light')

	useEffect(() => {
		const hour = new Date().getHours()
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setTheme(hour >= 7 && hour < 21 ? 'light' : 'dark')
	}, [])

	const toggleTheme = () => {
		setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'))
	}

	return (
		<div
			className={`min-h-screen transition-colors ${
				theme === 'light'
					? 'bg-slate-100 text-slate-800'
					: 'bg-slate-950 text-slate-100 [&_header]:bg-slate-900 [&_header_h1]:text-white [&_section]:bg-slate-900 [&_section_h3]:text-white [&_section_p]:text-slate-300 [&_section_div]:border-slate-700 [&_section_div]:text-slate-100'
			}`}
		>
			<main className='mx-auto flex max-w-4xl flex-col gap-6 px-6 py-8'>
				<Header theme={theme} toggleTheme={toggleTheme} />
				<Skills />
				<Education />
				<Projects />
				<Reviews />
			</main>
			<Footer />
			<ContactForm />
		</div>
	)
}

export default App

const info = {
	userAgent: navigator.userAgent,
	platform: navigator.platform,
}
const footer = document.getElementById('sys_info')
const themeToggle = document.getElementById('theme-toggle')
const feedbackModal = document.getElementById('feedback-modal')
const closeModal = document.getElementById('close-modal')

function setThemeByTime() {
	const hour = new Date().getHours()

	if (hour >= 7 && hour < 21) {
		document.body.classList.remove('night-theme')
		themeToggle.textContent = 'Day theme'
	} else {
		document.body.classList.add('night-theme')
		themeToggle.textContent = 'Night theme'
	}
}

setThemeByTime()

themeToggle.addEventListener('click', () => {
	document.body.classList.toggle('night-theme')
	themeToggle.textContent = document.body.classList.contains('night-theme')
		? 'Night theme'
		: 'Day theme'
})

setTimeout(() => {
	feedbackModal.classList.add('show')
}, 60000)

closeModal.addEventListener('click', () => {
	feedbackModal.classList.remove('show')
})

localStorage.setItem('systemInfo', JSON.stringify(info))
const data = JSON.parse(localStorage.getItem('systemInfo'))
footer.textContent = `${data.platform} ------ ${data.userAgent}`

const comment_section = document.getElementById('comments')

fetch('https://jsonplaceholder.typicode.com/posts/17/comments')
	.then(response => {
		if (!response.ok) {
			throw new Error('Failed to load comments')
		}
		return response.json()
	})
	.then(comments => {
		if (!Array.isArray(comments)) {
			throw new Error('Comments response is not an array')
		}

		comments.forEach(comment => {
			const card = document.createElement('div')

			card.classList.add('review-card', 'card')

			card.innerHTML = `
        <h3>${comment.name}</h3>
        <p>${comment.body}</p>
        <small>${comment.email}</small>
      `

			comment_section.appendChild(card)
		})
	})
	.catch(error => {
		console.error(error)
	})

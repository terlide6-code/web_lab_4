import { useEffect, useState } from 'react'

function Reviews() {
	const [comments, setComments] = useState([])
	const [error, setError] = useState('')

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts/17/comments')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Не вдалося завантажити відгуки.')
				}

				return response.json()
			})
			.then((data) => setComments(data))
			.catch((fetchError) => setError(fetchError.message))
	}, [])

	return (
		<section className='rounded-xl bg-white p-6 shadow-md'>
			<h3 className='mb-4 text-2xl font-bold text-slate-900'>Reviews:</h3>
			{error && <p className='text-red-600'>{error}</p>}
			<div className='grid gap-4 sm:grid-cols-2'>
				{comments.map((comment) => (
					<article className='rounded-lg border border-slate-200 p-4 shadow-sm' key={comment.id}>
						<h4 className='font-bold text-blue-700'>{comment.name}</h4>
						<a className='mt-1 block text-sm text-slate-500 hover:underline' href={`mailto:${comment.email}`}>
							{comment.email}
						</a>
						<p className='mt-3 text-slate-600'>{comment.body}</p>
					</article>
				))}
			</div>
		</section>
	)
}

export default Reviews

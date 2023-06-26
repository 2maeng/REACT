import { todoMock } from '__mock__/datas/todo.data'
import { rest } from 'msw'

export const addTodo = rest.post('/api/todo', async (req, res, ctx) => {
	let title
	let content

	await req.json().then(data => {
		title = data.title
		content = data.content
	})

	return res(
		ctx.status(200),
		ctx.json({
			id: Math.floor(Math.random() * 100000),
			title,
			content,
			state: false,
		}),
	)
})

export const readTodo = rest.get('/api/todo', (req, res, ctx) => {
	return res(ctx.status(200), ctx.json(todoMock))
})

export const updateTodo = rest.put('/api/todo/:id', async (req, res, ctx) => {
	const { id } = req.params
	let title
	let content
	let state

	await req.json().then(data => {
		title = data.title
		content = data.content
		state = data.state
	})

	return res(
		ctx.status(200),
		ctx.json({
			id,
			title,
			content,
			state,
		}),
	)
})

export const deleteTodo = rest.delete('/api/todo/:id', (req, res, ctx) => {
	const { id } = req.params
	return res(ctx.status(200), ctx.json({ id }))
})

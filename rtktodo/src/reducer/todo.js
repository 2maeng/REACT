// value
const initialState = {
	todos: [],
	addTodoState: {
		loading: false,
		done: false,
		err: null,
	},
	getTodoState: {
		loading: false,
		done: false,
		err: null,
	},
	updateTodoState: {
		loading: false,
		done: false,
		err: null,
	},
	deleteTodoState: {
		loading: false,
		done: false,
		err: null,
	},
}

// reducer
export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	extraReducers: builder => {
		// add todos
		builder.addCase(addTodo.pending, state => {
			state.addTodoState.loading = true
		})

		builder.addCase(addTodo.fullfiled, (state, action) => {
			state.todos.unshift(action.payload)
			state.addTodoState.loading = false
			state.addTodoState.done = true
			state.addTodoState.err = null
		})

		builder.addCase(addTodo.rejected, (state, action) => {
			state.todos.unshift(action.payload)
			state.addTodoState.loading = false
			state.addTodoState.done = true
			state.addTodoState.err = action.payload
		})

		// get todos

		// update todos

		// delete todos
	},
})

export const addTodo = createAsyncThunk('todo/addTodo', async todo => {
	const res = await axios.post('/api/todo', todo)
	return res.data
})

export const getTodos = createAsyncThunk('todo/getTodos', async () => {
	return null
})

export const updateTodo = createAsyncThunk('todo/updateTodo', async () => {
	return null
})

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async () => {
	return null
})

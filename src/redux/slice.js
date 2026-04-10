import { createSlice } from '@reduxjs/toolkit'
import { addTodo, deleteTodo, fetchTodos, toggleTodo } from './operations'

const initialState = {
	items: [],
	isLoading: false,
	error: null
}

const handlePending = state => {
	state.isLoading = true
	state.error = null
}

const handleRejected = (state, action) => {
	state.isLoading = false
	state.error = action.payload
}

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(fetchTodos.pending, handlePending)
			.addCase(fetchTodos.fulfilled, (state, action) => {
				state.isLoading = false
				state.items = action.payload
			})
			.addCase(fetchTodos.rejected, handleRejected)

			.addCase(addTodo.pending, handlePending)
			.addCase(addTodo.fulfilled, (state, action) => {
				state.isLoading = false
				state.items.push(action.payload)
			})
			.addCase(addTodo.rejected, handleRejected)

			.addCase(deleteTodo.pending, handlePending)
			.addCase(deleteTodo.fulfilled, (state, action) => {
				state.isLoading = false
				state.items = state.items.filter(todo => todo.id !== action.payload)
			})
			.addCase(deleteTodo.rejected, handleRejected)

			.addCase(toggleTodo.pending, handlePending)
			.addCase(toggleTodo.fulfilled, (state, action) => {
				state.isLoading = false
				const idx = state.items.findIndex(todo => todo.id === action.payload.id)

				if (idx !== -1) state.items[idx] = action.payload
			})
			.addCase(toggleTodo.rejected, handleRejected)
	}
})

export const todosReducer = todosSlice.reducer

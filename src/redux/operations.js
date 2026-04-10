import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://69d90b720576c938825a750f.mockapi.io'

export const fetchTodos = createAsyncThunk(
	'fetchAllTodos',
	async (_, thunkAPI) => {
		try {
			const res = await axios.get('/todos')
			return res.data
		} catch (err) {
			return thunkAPI.rejectWithValue(err.message)
		}
	}
)

export const addTodo = createAsyncThunk('addTodo', async (title, thunkAPI) => {
	try {
		const newTodo = {
			title,
			completed: false
		}
		const res = await axios.post('/todos', newTodo)
		return res.data
	} catch (err) {
		return thunkAPI.rejectWithValue(err.message)
	}
})

export const deleteTodo = createAsyncThunk(
	'deleteTodo',
	async (id, thunkAPI) => {
		try {
			await axios.delete(`/todos/${id}`)
			return id
		} catch (err) {
			return thunkAPI.rejectWithValue(err.message)
		}
	}
)

export const toggleTodo = createAsyncThunk(
	'toggleTodo',
	async (todo, thunkAPI) => {
		try {
			const updatedTodo = {
				...todo,
				completed: !todo.completed
			}
			const res = await axios.put(`/todos/${todo.id}`, updatedTodo)
			return res.data
		} catch (err) {
			return thunkAPI.rejectWithValue(err.message)
		}
	}
)

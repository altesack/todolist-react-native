import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TodoListItemType {
  id: number
  name: string
  isDone: boolean
  isDeleted: boolean
  // order: number,
}

interface TodoList {
  data: TodoListItemType []
}

const initialState: TodoList = {
  data: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addItem: (state) => {
      state.data.push({
        id: state.data.length + 1,
        name: '',
        isDone: false,
        isDeleted: false,
      })
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const item = state.data.find((item) => action.payload === item.id)
      if (item !== undefined) {
        item.isDeleted = true
      }
    },
    toggleDone: (state, action: PayloadAction<number>) => {
      const item = state.data.find((item) => action.payload === item.id)
      if (item !== undefined) {
        item.isDone = !item.isDone
      }
    },
    renameItem: (state, action: PayloadAction<{ id: number, name: string }>) => {
      const item = state.data.find((item) => action.payload.id === item.id)
      if (item !== undefined) {
        item.name = action.payload.name
      }
    },
    // TODO reorder drag'n'drop
  },
})

export const { addItem, removeItem, toggleDone, renameItem } = todoSlice.actions

export default todoSlice.reducer

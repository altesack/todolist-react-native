import { RootState } from './store'
import { TodoListItemType } from './todoSlice'

export const getDoneItems = (state: RootState): TodoListItemType[] =>
  state.todo.data.filter((item) => !item.isDeleted && item.isDone)

export const getNotDoneItems = (state: RootState): TodoListItemType[] =>
  state.todo.data.filter((item) => !item.isDeleted && !item.isDone)

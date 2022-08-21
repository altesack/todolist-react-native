import React from 'react'
import { Task } from './Task'
import { TodoListItemType } from '../../reducers/todoSlice'
import { NoItems } from './NoItems'

interface TasksListProps {
  items: TodoListItemType[]
}

export const TasksList: React.FC<TasksListProps> = ({ items }: TasksListProps) => {
  if (items.length === 0) {
    return <NoItems/>
  }

  return <>{
    items.map(
      (item) => <Task item={item} key={item.id}/>)
  }</>
}

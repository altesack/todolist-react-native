import React, { useState } from 'react'
import {StyleSheet, Text} from 'react-native'
import { TodoListItemType } from '../../reducers/todoSlice'
import { TaskNameInput } from './TaskNameInput'

interface TaskProps {
  item: TodoListItemType
}

export const TaskName: React.FC<TaskProps> = ({ item }: TaskProps) => {
  const [editMode, setEditMode] = useState(item.name === '')

  const switchEditModeOn = (): void => {
    setEditMode(true)
  }

  const switchEditModeOff = (): void => {
    setEditMode(false)
  }

  if (editMode) {
    return <TaskNameInput item={item} switchEditModeOff={switchEditModeOff}/>
  }

  if (item.isDone) {
    return <Text style={styles.doneTaskTitle}>{item.name}</Text> // stricke
  }

  return <Text  style={styles.taskTitle} onPress={switchEditModeOn}>{item.name}</Text> //???
}
const generalStyle = {
  flexGrow: 1,
  paddingHorizontal: 10,
}
const styles = StyleSheet.create({
  taskTitle: {
    ...generalStyle,
  },
  doneTaskTitle: {
    ... generalStyle,
    textDecorationLine: 'line-through',
  },

});

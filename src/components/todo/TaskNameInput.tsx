import React from 'react'
import {StyleSheet, TextInput} from 'react-native'
import { useDispatch } from 'react-redux'
import { removeItem, renameItem, TodoListItemType } from '../../reducers/todoSlice'

interface TaskNameInputProps {
  item: TodoListItemType
  switchEditModeOff: () => void
}

export const TaskNameInput: React.FC<TaskNameInputProps> = ({ item, switchEditModeOff }: TaskNameInputProps) => {
  const dispatch = useDispatch()

  const blur = (): void => {
    switchEditModeOff()
    if (item.name === '') {
      dispatch(removeItem(item.id))
    }
  }

  const change = (value: string): void => {
    dispatch(renameItem({
      id: item.id,
      name: value,
    }))
  }

  return <TextInput
    autoFocus
    defaultValue={item.name}
    placeholder={'Write your task here'}
    onBlur={blur}
    onChangeText={change}
    style={styles.input}
  />

}
const styles = StyleSheet.create({

  input: {
    flexGrow: 1,
    marginHorizontal: 10,
  }
})

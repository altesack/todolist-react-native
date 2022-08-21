import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import {StyleSheet, Switch, View} from 'react-native'
import { TaskName } from './TaskName'
import { removeItem, TodoListItemType, toggleDone } from '../../reducers/todoSlice'
import { useDispatch } from 'react-redux'

interface TaskProps {
  item: TodoListItemType
}

export const Task: React.FC<TaskProps> = ({ item }: TaskProps) => {
  const dispatch = useDispatch()

  const remove = (): void => {
    dispatch(removeItem(item.id))
  }

  const toggle = (): void => {
    dispatch(toggleDone(item.id))
  }

  return (<View style={styles.task}>
      <Switch
        onValueChange={toggle}
        value={item.isDone}
      />
      <TaskName item={item} />
      <FontAwesome.Button
        name="trash"
        onPress={remove}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  task: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});

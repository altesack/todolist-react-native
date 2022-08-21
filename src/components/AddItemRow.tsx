import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../reducers/todoSlice'

export const AddItemRow: React.FC = () => {
  const dispatch = useDispatch()

  const click = (): void => {
    dispatch(addItem())
  }

  return (
    <FontAwesome.Button name="plus" onPress={click}>
      Add new task
    </FontAwesome.Button>
  )
}

import React from 'react'
import {StyleSheet, Text} from 'react-native'

export const NoItems: React.FC = () => {
  return (
    <Text style={styles.element}>no items</Text>
  )
}

const styles = StyleSheet.create({
  element: {
    fontStyle: 'italic'
  },
});

import React from 'react'
import {StyleSheet, Text} from 'react-native'

interface Props {
  title: string
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const HeaderRow: React.FC<Props> = ({ title, size }: Props) => {
  return (
    <Text  style={styles[size]}>{title}</Text>
  )
}

const headerStyle = {
  marginTop: 10,
  marginTottom: "0.5rem",
  // fontWeight: 'bold',
  // display: 'block',
  // clear: 'both', // ????
}

const styles = StyleSheet.create({
  h1: { ...headerStyle, fontSize: 40 },
  h2: { ...headerStyle, fontSize: 32 },
  h3: { ...headerStyle, fontSize: 28 },
  h4: { ...headerStyle, fontSize: 24 },
  h5: { ...headerStyle, fontSize: 20 },
  h6: { ...headerStyle, fontSize: 16 },
});

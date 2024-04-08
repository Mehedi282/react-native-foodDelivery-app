import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header(props) {
  return (
    <View style={style.headerContainer}>
      <Text style={{ fontSize: 40, color: 'blue', fontFamily: 'Segoe UI', textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 5 }}>{props.headerLavel}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: '10%',
    backgroundColor: '#a29bfe',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.50,
    shadowRadius: 6.84,
    elevation: 5,
  }

})
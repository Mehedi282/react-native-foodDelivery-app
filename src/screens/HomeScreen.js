import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import Card from '../components/Card';
import { StatusBar } from 'expo-status-bar';
import  {CardData}  from '../data/CardData';




export default function HomeScreen() {
  return (
    <View style={styles.container} >
        <StatusBar style='auto' />
        <Header headerLavel= 'Foodora'/>
        

        <FlatList
        data={CardData}
        renderItem={({item}) => <Card data={item}/>}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6c5ce7',
    alignItems: 'center',
    
  },
});
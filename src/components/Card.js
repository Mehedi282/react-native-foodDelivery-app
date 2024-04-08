import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';


export default function Card({data}) {
  console.log(data);
  return (
    <View style={cardStyle.container} >
      <Image style={cardStyle.img} source={require('../../assets/res1.jpg')} />
      <View style={cardStyle.cardtex}>
        <Text style={cardStyle.cardtex1}>
            {data.name}
        </Text>

        <View style={{display: 'flex', flexDirection: 'row', gap:6, alignItems:'center', paddingTop:10}}>
        <Icon name="location" size={20} color="#6c5ce7" />

        <Text style={cardStyle.cardtex2}>
           {data.location}
        </Text>
        </View>

        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{display: 'flex', flexDirection: 'row', gap:6, alignItems:'center', paddingTop:10}}>
        <Icon name="time" size={20} color="#6c5ce7" />
          <Text>12:23</Text>
       
        </View>
        <View style={{display: 'flex', flexDirection: 'row', gap:6, alignItems:'center', paddingTop:10}}>
        <Icon name="checkmark-circle" size={20} color="#6c5ce7" />
          <Text style={{color:'green'}}>Open</Text>
       
        </View>
        </View>
      </View>
    </View>
  )
}

const cardStyle = StyleSheet.create({
    container:{
        width: '95%',
        height: 'auto',
        backgroundColor:'#a29bfe',
        margin:15,
        borderRadius:10,
        padding:0,
        shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.50,
    shadowRadius: 6.84,
    elevation: 5,

    },

    img:{
        width:'100%',
        height:150,
        borderTopEndRadius:10,
        borderTopLeftRadius:10
    }
    ,
    cardtex:{
        padding:15,
       
    },
    cardtex1:{
        fontSize:23,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    cardtex2:{
        fontSize:15,
        fontFamily: 'Roboto',
    }
})
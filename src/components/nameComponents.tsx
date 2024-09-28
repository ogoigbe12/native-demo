import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const NameComponents = () => {
  return (
    <View>
      <Text style= {styles.text}>Samuel Ogoigbe</Text>

      <Text style = {styles.textNew}>My name is Sammie and i love coding</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    // container:{
    //     flex:1,
    //     justifyContent:'center',
    //     alignContent:'center'
    // },
    text:{
        fontWeight:  'bold',
        textAlign:  'center',
        fontSize: 20
    },
    textNew:{
        fontSize: 15,
        textAlign: 'center',
    }
}) 

export default NameComponents
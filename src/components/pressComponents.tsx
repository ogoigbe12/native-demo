import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'


const PressComponents = () => {
  return (
    <View>
      {/* <Text>PressComponents</Text> */}

      <Pressable  onPress={() => console.warn('Pressed!')}>

        <Text style={styles.text}>Press me!</Text>
      </Pressable>

    </View>
  )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'blue',
        textAlign: 'center'
    }
})

export default PressComponents
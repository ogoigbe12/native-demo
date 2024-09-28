import { View, Text, Button, Pressable } from 'react-native'
import React from 'react'

const ButtonComponent = () => {
  return (
    <View>
      {/* <Text>button</Text> */}
      {/* <Button title='Press Me' color='teal' onPress={() => alert('incoming message')}/> */}

      <Pressable onPress={() => console.warn("Pressed")}>
        <Text style={{color:'teal'}}>Press Me</Text>
      </Pressable>

      <Pressable onPressIn={() => console.warn("Pressed in")}>
        <Text style={{color:'red'}}>Press Me</Text>
      </Pressable>

      <Pressable onPressOut={() =>  console.warn("Pressed out")}>
        <Text style={{color:'green'}}>Press Me</Text>
      </Pressable>

      <Pressable onLongPress={() => console.warn('Pressed long')}>
        <Text style={{color:'blue'}}>Press Me</Text>
      </Pressable>
    </View>
  )
}

export default ButtonComponent
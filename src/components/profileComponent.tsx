import { View, Text, Image } from 'react-native'
import React from 'react'

const ProfileComponent = () => {
  return (
    <View>
      {/* <Text>ProfileComponent</Text> */}

      <Image
      source={require("../assets/jj.jpg")}
      style={{width: 200, height: 150, borderRadius: 30,
         marginLeft:  70, marginRight: 60, marginTop: 50, marginBottom: 50 }}

      />
    </View>
  )
}

export default ProfileComponent
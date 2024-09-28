import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageComponents = () => {
  return (
    <View>
      <Text>Let's explore Image</Text>

      
        <Image source={require('../assets/jj.jpg')} 

        style={{width:200, height: 200}}

        />

        <Image 
        source={{uri:"https://miro.medium.com/v2/resize:fit:720/format:webp/1*MF5V_dkybUTcfzwHFh0VSw.jpeg" }}
        style={{width: 200, height:200}}
        />
      
    </View>
  )
}

export default ImageComponents
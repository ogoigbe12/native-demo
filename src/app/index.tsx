import { View, Text } from 'react-native'
import React from 'react'
import Greet from '../components/greet'
import Age from '../components/age'
import Handle from '../components/handle'
import Subject from '../components/subject'
import ButtonComponent from '../components/button'
import ImageComponents from '../components/imageComponents'
import ProfileComponent from '../components/profileComponent'
import NameComponents from '../components/nameComponents'
import PressComponents from '../components/pressComponents'

const index = () => {
  return (
    <View>
      {/* <Greet /> */}
      {/* <Age /> */}
      {/* <Handle/> */}
      {/* <Subject/> */}
      {/* <ButtonComponent/> */}
      {/* <ImageComponents/>  */}

      <ProfileComponent/>
      <NameComponents/>
      <PressComponents/>
    </View>
  )
}

export default index
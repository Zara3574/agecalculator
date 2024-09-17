import { View, Text } from 'react-native'
import React from 'react'
import MainStack from './src/navigation/mainStack'
const App = () => {
  return (
    <View style={{flex:1}}>
     <MainStack/>
    </View>
  )
}

export default App
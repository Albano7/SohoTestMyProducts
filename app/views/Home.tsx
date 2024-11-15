import { View, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import Theme from '@app/styles'
import Colors from '@app/styles/colors'
import { verifyingUser } from '@app/commands'

const Home = () => {
  useEffect(() => {
    verifyingUser()
  }, [])
  
  return (
    <View style={Theme.App.container_bg}>
      <ActivityIndicator size="large" color={Colors.white} />
    </View>
  )
}

export default Home
import { View, ActivityIndicator, Image } from 'react-native'
import React, { useEffect } from 'react'
import Theme from '@app/styles'
import Colors from '@app/styles/colors'
import verifyingUser from '@app/commands/verifyingUser'
import { StackActions, useNavigation } from '@react-navigation/native'
import Routes from '@app/constants/routes'
import { Text } from '@react-native-material/core'

const SplashScreen = () => {
  const navigation = useNavigation();
  
  useEffect(() => {
    verifyingUser().then((apiKey: string | null) => {
      if(apiKey)
        navigation.dispatch(
          StackActions.replace(Routes.ProductList)
        );
      else
        navigation.dispatch(
          StackActions.replace(Routes.Login)
        );
    })
  }, [])
  
  return (
    <View style={Theme.App.containerBg}>
      <Image
        style={Theme.App.logoStartApp}
        source={require('@assets/ListadoProductos_logo.png')}
      />
      <Text style={Theme.App.titleStartApp}>
        Bienvenido a Listado Productos
      </Text>
      <ActivityIndicator size="large" color={Colors.white} />
    </View>
  )
}

export default SplashScreen
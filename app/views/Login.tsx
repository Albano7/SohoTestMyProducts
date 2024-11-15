import { View, Text, Image, KeyboardAvoidingView, Keyboard, ScrollView, Animated } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@app/styles/colors'
import { Formik } from 'formik'
import { Button, TextInput } from '@react-native-material/core'
import onLoginUser from '@app/commands/loginUser'
import { useSelector } from 'react-redux'
import { RootState } from '@app/store'
import { StateLoadLogin } from '@app/constants/user'
import loginValidationSchema from '@app/hooks/userLogin'
import Theme from '@app/styles'
import { StackActions, useNavigation } from '@react-navigation/native'
import Routes from '@app/constants/routes'

const Login = () => {
  const stateLoadLogin = useSelector((state: RootState) => state.user?.stateLoadLogin);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const navigation = useNavigation();
  
  const headerAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', handleKeyboardShow);
    Animated.timing(headerAnimation, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
    return () => {
      showSubscription.remove();
    };
  }, []);

  useEffect(() => {
    if (stateLoadLogin === StateLoadLogin.SUCCESS_LOGIN) {
      navigation.dispatch(
        StackActions.replace(Routes.ProductList)
      );
    }
  }, [stateLoadLogin]);

  const handleKeyboardShow = (event: any) => {
    setIsKeyboardVisible(true);
  };

  const handleSubmitUser = (values: LoginType) => {
    __DEV__ && console.log("handleSubmitUser start")
    onLoginUser(values)
  }

  const isLoadingLogin = stateLoadLogin === StateLoadLogin.LOADING_LOGIN

  const headerAnimatedStyle = {
    opacity: headerAnimation,
    transform: [
      {
        translateY: headerAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [-50, 0]
        })
      }
    ]
  };

  return (
    <KeyboardAvoidingView style={Theme.App.container} >
      <SafeAreaView style={Theme.App.container_bg_white}>
        <ScrollView style={Theme.App.container}>
          <Animated.View 
            style={[Theme.Login.headerContainer, headerAnimatedStyle]} 
            testID='header_container'
          >
            <Image
              style={Theme.App.logo_start_app}
              source={require('@assets/ListadoProductos_logo.png')}
            />
            <Text style={Theme.App.title_login_app}>
              ListadoProductos
            </Text>
          </Animated.View>
          <View style={Theme.Login.formContainer}>
            <Text style={Theme.App.title_start_app}>
              Bienvenido
            </Text>
            {stateLoadLogin === StateLoadLogin.ERROR_LOGIN && (
              <Text style={Theme.Login.errorText}>
                Error al iniciar sesión
              </Text>
            )}
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{ username: "", password: "" }}
              onSubmit={handleSubmitUser}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid
              }) => (
                <View style={Theme.Login.formInputContainer}>
                  <TextInput
                    label="Nombre de usuario"
                    variant="standard"
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    autoCapitalize="none"
                  />
                  {errors.username && (
                    <Text style={Theme.Login.inputError}>{errors.username}</Text>
                  )}
                  <TextInput
                    label="Contraseña"
                    variant="standard"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    style={Theme.Login.passwordInput}
                    value={values.password}
                    secureTextEntry={true}
                    autoCapitalize="none"
                  />
                  {errors.password && (
                    <Text style={Theme.Login.inputError}>{errors.password}</Text>
                  )}
                  <Button
                    title="Iniciar sesión"
                    style={Theme.Login.loginButton}
                    color={Colors.bg}
                    disabled={!isValid || isLoadingLogin}
                    contentContainerStyle={Theme.Login.loginButtonContent}
                    tintColor={Colors.white}
                    onPress={() => handleSubmit()}
                    loading={isLoadingLogin}
                    loadingIndicatorPosition="overlay"
                  />
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Login
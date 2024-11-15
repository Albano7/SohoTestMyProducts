import { getUserApi } from "@app/api/users";
import { StateLoadLogin, STORAGE_USER_API_KEY, userIdExample } from "@app/constants/user";
import { setLoginUserLoadState, setUserError, setUserProperties } from "@app/features/user/userSlice";
import { store } from "@app/store";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getProducts } from "@app/commands/products";

/// Verificación de usuario
const verifyingUser = async (): Promise<string | null> => {
  __DEV__ && console.log("verifyingUser start")
  const dispatch = store.dispatch
  try {
    const keyUser = await AsyncStorage.getItem(STORAGE_USER_API_KEY);
    if (keyUser !== null) {
      dispatch(setLoginUserLoadState({ stateLoadLogin:  StateLoadLogin.SUCCESS_LOGIN }))
      getUserInfo(keyUser).then();
      getProducts().then();
    }
    return keyUser
  } catch (e) {
    console.error("ERROR AsyncStorage", e);
    return null
  }
}

/// Obtención de info de usuario via API
export const getUserInfo = async (keyUser: string) => {
  __DEV__ && console.log("getUserInfo start")
  // Consulta de usuarioId estática debido a que no existe la consulta de usuario por apiKey
  const dispatch = store.dispatch
  const {user, error} = await getUserApi(userIdExample)
  if (user) {
    const userInfo: UserSimpleType = {
      id: user.id,
      email: user.email,
      firstName: user.name.firstname,
      lastName: user.name.lastname,
      phone: user.phone,
      userName: user.username,
    }
    dispatch(setUserProperties({ userProperties: userInfo }))
  }else if(error){
    dispatch(setUserError({ userPropertiesError: error }))
  }
}


export default verifyingUser
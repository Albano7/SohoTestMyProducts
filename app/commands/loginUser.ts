import {  loginUserApi } from "@app/api/users";
import { StateLoadLogin, STORAGE_USER_API_KEY } from "@app/constants/user";
import { resetUserProperties, setLoginUserLoadState } from "@app/features/user/userSlice";
import { store } from "@app/store";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserInfo } from "@app/commands/verifyingUser";
import { getProducts } from "@app/commands/products";
import { resetProducts } from "@app/features/products/productsSlice";

/// Login de usuario
const onLoginUser = async (loginData: LoginType): Promise<void> => {
    const dispatch = store.dispatch
    dispatch(setLoginUserLoadState({ stateLoadLogin: StateLoadLogin.LOADING_LOGIN }))
    __DEV__ && console.log("loginUser start")
    try {
        const responseUserLogin = await loginUserApi(loginData)
        const userToken = responseUserLogin?.userToken?.token
        if (responseUserLogin.error) 
            dispatch(setLoginUserLoadState({ stateLoadLogin: StateLoadLogin.ERROR_LOGIN }))
        else if (userToken){
            await AsyncStorage.setItem(STORAGE_USER_API_KEY, userToken)
            await getProducts()
            getUserInfo(userToken).then();
            dispatch(setLoginUserLoadState({ stateLoadLogin: StateLoadLogin.SUCCESS_LOGIN }))
        }
    } catch (e) {
        console.error("ERROR AsyncStorage", e);
    }
}

/// Cerrar sesión de usuario
export const onLogOutUser = async (): Promise<boolean> => {
    __DEV__ && console.log("onLogOutUser start")
    const dispatch = store.dispatch
    dispatch(setLoginUserLoadState({ stateLoadLogin: undefined }))
    dispatch(resetUserProperties({}))
    dispatch(resetProducts({}))
    try {
        await AsyncStorage.removeItem(STORAGE_USER_API_KEY)
        return true
    } catch (e) {
        console.error("ERROR AsyncStorage", e);
    }
    return false
}

export default onLoginUser
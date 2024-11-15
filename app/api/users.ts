import apiRest from "@app/constants/apiRest"
import { validateStatus } from "@app/hooks/api"
import axios from "axios"

const _errorRest = (errorNumber: number): ErrorApiType => ({
    errorNumber,
    errorDetail: "Ups! Error to get user"
})

export const getUserApi = async (userId: number): Promise<UserApiRestType> => {
    try {
        const request = await axios.get(`${apiRest.users}/${userId}`)
        if (validateStatus(request.status)) {
            return { user: request.data }
        }
        return { error: _errorRest(request.status) }
    } catch (error) {
        __DEV__ && console.error("ERROR API REST getUserApi", error)
        return { error: _errorRest(400) }
    }
}

export const loginUserApi = async (userlogin: LoginType): Promise<UserLoginApiRestType> => {
    try {
        const request = await axios.post(apiRest.login, userlogin)
        if (validateStatus(request.status)) {
            return { userToken: request.data }
        }
        return { error: _errorRest(request.status) }
    } catch (error) {
        __DEV__ && console.error("ERROR API REST loginUserApi", error)
        return { error: _errorRest(400) }
    }

}
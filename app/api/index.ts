import axios from "axios"


export const getUsersListApi = async () => {
    const request = await axios.get("https://reqres.in/api/users")
    if(request.status===200){
        return request.data
    }
    return { error: request.status, errorDetail: "Ups! Error" }
}
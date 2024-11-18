import apiRest from "@app/constants/apiRest"
import { validateStatus } from "@app/hooks/api"
import axios from "axios"

const _errorRest = (errorNumber: number): ErrorApiType => ({
    errorNumber,
    errorDetail: "Ups! Error to get products"
})

export const getProductsApi = async (): Promise<ProductsApiRestType> => {
    try {
        const request = await axios.get(`${apiRest.products}`)
        if (validateStatus(request.status)) {
            return { products: request.data }
        }
        return { error: _errorRest(request.status) }
    } catch (error) {
        __DEV__ && console.error("ERROR API REST getProductsApi", error)
        return { error: _errorRest(400) }
    }
}
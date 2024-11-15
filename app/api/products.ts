import apiRest from "@app/constants/apiRest"
import { validateStatus } from "@app/hooks/api"
import axios from "axios"

const _errorRest = (errorNumber: number): ErrorApiType => ({
    errorNumber,
    errorDetail: "Ups! Error to get products"
})

export const getProductsApi = async (): Promise<ProductsApiRestType> => {
    const request = await axios.get(`${apiRest.products}`)
    if (validateStatus(request.status)) {
        return { products: request.data }
    }
    return { error: _errorRest(request.status) }
}
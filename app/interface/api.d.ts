type ErrorApiType = {
    errorNumber?: number,
    errorDetail?: string
}

interface UserApiRestType {
    user?: UserType,
    error?: ErrorApiType
}

interface ProductsApiRestType {
    products?: ProductType[],
    error?: ErrorApiType
}

type UserTokenType = {
    token: string
}

interface UserLoginApiRestType {
    userToken?: UserTokenType,
    error?: ErrorApiType
}
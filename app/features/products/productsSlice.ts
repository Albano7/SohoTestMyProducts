import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface initialStateProps {
  productsList?: ProductType[],
  productDetail?: ProductType,
  productsListError?: ErrorApiType,
  productDetailError?: ErrorApiType,
}


const initialState: initialStateProps = {
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsList: (state, action: PayloadAction<{ productsList?: ProductType[] }>) => {
      state.productsList = action.payload.productsList
    },
    setProductDetail: (state, action: PayloadAction<{ productDetail?: ProductType }>) => {
      state.productDetail = action.payload.productDetail
    },
    setProductsListError: (state, action: PayloadAction<{ productsError: ErrorApiType }>) => {
      state.productsListError = action.payload.productsError
    },
    productDetailError: (state, action: PayloadAction<{ productsError: ErrorApiType }>) => {
      state.productDetailError = action.payload.productsError
    },
  },
})

export const { setProductsList, setProductDetail, setProductsListError, productDetailError } = productsSlice.actions

export default productsSlice.reducer
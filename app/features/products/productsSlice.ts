import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface initialStateProps {
  productsList?: ProductType[][],
  productsListError?: ErrorApiType,
  productsListLength?: number,
}


const initialState: initialStateProps = {
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsList: (state, action: PayloadAction<{ productsList?: ProductType[][], productsListLength: number }>) => {
      state.productsList = action.payload.productsList
      state.productsListLength = action.payload.productsListLength
    },
    setProductsListError: (state, action: PayloadAction<{ productsError: ErrorApiType }>) => {
      state.productsListError = action.payload.productsError
    },
    resetProducts: (state, _) => {
      state.productsList = undefined
      state.productsListError = undefined
      state.productsListLength = undefined
    },
  },
})

export const { setProductsList, setProductsListError, resetProducts } = productsSlice.actions

export default productsSlice.reducer
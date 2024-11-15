import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface initialStateProps {
  productsProperties?: string,
}


const initialState: initialStateProps = {
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsProperties: (state, action: PayloadAction<{ productsProperties: string }>) => {
      state.productsProperties = action.payload.productsProperties
    },
  },
})

export const { setProductsProperties } = productsSlice.actions

export default productsSlice.reducer
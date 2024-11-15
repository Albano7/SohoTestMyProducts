import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface initialStateProps {
  userProperties?: string,
}


const initialState: initialStateProps = {
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserProperties: (state, action: PayloadAction<{ userProperties: string }>) => {
      state.userProperties = action.payload.userProperties
    },
  },
})

export const { setUserProperties } = userSlice.actions

export default userSlice.reducer
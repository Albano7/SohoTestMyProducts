import { StateLoadLogin } from '@app/constants/user'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface initialStateProps {
  userProperties?: UserSimpleType,
  userPropertiesError?: ErrorApiType,
  stateLoadLogin?: StateLoadLogin
  isOnline: boolean,
}


const initialState: initialStateProps = {
  isOnline: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserProperties: (state, action: PayloadAction<{ userProperties: UserSimpleType }>) => {
      state.userProperties = action.payload.userProperties
    },
    setUserError: (state, action: PayloadAction<{ userPropertiesError: ErrorApiType }>) => {
      state.userPropertiesError = action.payload.userPropertiesError
    },
    resetUserProperties: (state, _) => {
      state.userProperties = undefined
    },
    setLoginUserLoadState: (state, action: PayloadAction<{ stateLoadLogin?: StateLoadLogin }>) => {
      state.stateLoadLogin = action.payload.stateLoadLogin
    },
    setIsOffline: (state, action: PayloadAction<{ isOnline: boolean }>) => {
      state.isOnline = action.payload.isOnline
    },
  },
})

export const { setUserProperties, setUserError, resetUserProperties, setLoginUserLoadState, setIsOffline } = userSlice.actions

export default userSlice.reducer
import { configureStore, Tuple } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import userReducer from '@app/features/user/userSlice'
import productsReducer from '@app/features/products/productsSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
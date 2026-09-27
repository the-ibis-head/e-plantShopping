import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '@/redux/CartSlice'
import productReducer from '@/redux/ProductSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer
  }
})

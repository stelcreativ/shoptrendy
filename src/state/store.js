import { configureStore } from "@reduxjs/toolkit"
import slideReducer from "../features/slices/sliderSlice"
import productsReducer from "../features/slices/productSlice"
import cartReducer from "../features/slices/cartSlice"

export const store = configureStore({
    reducer: {
        slider: slideReducer,
        products: productsReducer,
        Cart: cartReducer,
    }
})
import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        amount: 0,
        totalAmount: 0,
        totalPrice: 0,
    },
    reducers: {
        addToCart(state, action) {
            const productId = action.payload
            try {
                const found = state.cart.find(
                    (product) => product.id === productId.id &&
                        product.size === productId.size &&
                        product.color === productId.color
                )
                if (found) {
                    found.amount++
                    found.totalPrice += productId.price
                    state.totalAmount++
                    state.totalPrice += productId.price
                } else {
                    state.cartItems.push({
                        id: productId.id,
                        price: productId.price,
                        size: productId.size,
                        amount: 1,
                        totalPrice: productId.price,
                        name: productId.name,
                        color: productId.color

                    })
                    state.totalAmount++
                    state.totalPrice += productId.price
                }
            } catch (err) {
                return err
            }
        }
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
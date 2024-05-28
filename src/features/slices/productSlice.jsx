import { createSlice, configureStore } from "@reduxjs/toolkit"
import { productData } from '../../data/shopdata'

export const productSlice = createSlice({
    name: "products",
    initialState: {
        filteredProducts:
            JSON.parse(sessionStorage.getItem("filteredData")) || productData,
        singleProduct:
            JSON.parse(sessionStorage.getItem("oneProduct")) || productData,
    }
    ,
    reducers: {
        filterProducts(state, action) {
            try {
                const filter = productData.filter(
                    (product) => product.type === action.payload
                );
                state.filteredProducts = filter;
                console.log("filter", filter)
                const saveState = JSON.stringify(filter);
                sessionStorage.setItem("filteredData", saveState);
            } catch (err) {
                return err;
            }
        },

        singleProduct(state, action) {
            try {
                const oneProduct = productData.filter(
                    (product) => product.id === action.payload
                )
                state.singleProduct = oneProduct

                const saveState = JSON.stringify(oneProduct)
                sessionStorage.setItem("oneProduct", saveState)
                console.log("oneProduct", oneProduct)
            } catch (err) {
                return err
            }
        }

    },

});

export const { filterProducts, singleProduct } = productSlice.actions;
export default productSlice.reducer;
import { createSlice, configureStore } from "@reduxjs/toolkit"
import { ImageSliderItems } from '../../data/shopdata'

export const sliderSlice = createSlice({
    name: "slider",
    initialState: {
        value: 1,
        length: ImageSliderItems.length,
    },
    reducers: {
        nextSlide(state, action) {
            console.log("action", action.payload)
            console.log("action", state)
            state.value = action.payload > state.length ? 0 : action.payload
        },
        prevSlide(state, action) {
            state.value = action.payload < 0 ? state.length - 1 : action.payload
        },

    }
})

export const { nextSlide, prevSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
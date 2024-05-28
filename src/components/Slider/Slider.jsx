import React from 'react'
import { nextSlide, prevSlide } from "../../features/slices/sliderSlice"
import { useSelector, useDispatch } from 'react-redux'
import { ImageSliderItems } from '../../data/shopdata'

const Slider = () => {
    const slideIndex = useSelector((state) => state.slider.value)
    console.log("slideIndex", slideIndex)
    const dispatch = useDispatch()

    return (
        <div className="relative pb-4">
            <div>
                {ImageSliderItems.map((item, index) => {
                    return (
                        <div key={item.id} className={parseInt(item.id) === slideIndex
                            ? "opacity-100 duration-700 ease-in-out scale-100"
                            : "opacity-0 duration-700 ease-in-out scale-95"}>
                            <div>
                                {parseInt(item.id) === slideIndex && (
                                    <img
                                        className="relative h-[700px] w-full block z-10 object-cover overflow-hidden before:bg-gradient-to-r from-black"
                                        src={item.img}
                                        alt="trends">

                                    </img>)}
                            </div>
                        </div>
                    )
                })}

            </div>

            <button
                className="absolute top-[50%] cursor-pointer z-10 right-4 bg-white rounded-full p-2"
                onClick={() => dispatch(nextSlide(slideIndex + 1))}>

                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </button>
            <button
                className="absolute top-[50%] cursor-pointer z-10 left-4 bg-white rounded-full p-2"
                onClick={() => dispatch(prevSlide(slideIndex - 1))}>
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>
        </div>
    )
}

export default Slider
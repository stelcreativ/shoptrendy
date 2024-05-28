import React from 'react'
import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider'
import NavigateLinks from '../NavigateLinks/NavigateLinks'
import MostPopular from '../MostPopular/MostPopular'
import Footer from '../Footer/Footer'

const Main = () => {
    return (
        <>
            <div>
                <Navbar />
                <Slider />
                <NavigateLinks />
                <MostPopular />
                <Footer />

            </div>
            <div>

            </div>
        </>
    )
}

export default Main
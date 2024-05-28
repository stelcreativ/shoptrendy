import React from 'react'
import { useDispatch } from "react-redux"
import { filterProducts } from "../../features/slices/productSlice"
import { Link } from 'react-router-dom'

const PopularItem = ({ item }) => {
    const dispatch = useDispatch()

    return (
        <div className="relative h-[50vh] m-2">
            <img className="w-full h-full object-cover"
                src={item.img} />
            <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center ">
                <h4
                    className="bg-white bg-opacity-70 mt-15 p-3 text-black rounded-md "
                >{item.title}</h4>
                <Link to={"/filteredProducts/" + item.type}>
                    <button
                        className="bg-white p-3 mt-2 cursor-pointer text-black rounded-lg"
                        onClick={() => dispatch(filterProducts(item.type))}
                    >SHOP NOW</button></Link>
            </div>

        </div>
    )
}

export default PopularItem
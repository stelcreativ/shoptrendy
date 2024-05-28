import React from 'react'
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import ProductCard from "./ProductCard"


const FilteredProducts = () => {
    const products = useSelector((state) => state.products.filteredProducts)
    console.log("products", products)
    const { type } = useParams()
    console.log("params", type)
    return (
        <div className="pt-16">
            <div className="pl-14 ">
                <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
                    {type}
                </h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 md:max-w-none sm:grid-cols-1 sm:mx-0 justify-items-center py-8 gap-4">
                {products
                    .filter((product) => product.type === type)
                    .map((product, index) => {
                        return (
                            <div key={index} >
                                <ProductCard
                                    id={product.id}
                                    title={product.title}
                                    img={product.img}
                                    description={product.text}
                                    price={product.price}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FilteredProducts
import React from 'react'
import { Button } from '@material-tailwind/react'
import { filterProducts } from "../../features/slices/productSlice"
import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom'

const NavigateLinks = () => {
    const buttons = [
        "Skirt",
        "Tshirt",
        "Sneakers",
        "Denim"
    ];

    const dispatch = useDispatch()

    return (
        <div>
            <div className="flex items-center justify-center py-8">
                {buttons.map((button, index) => {
                    return (
                        <div key={index} className="mr-4" >
                            <Link to={"/filteredProducts/" + button}>
                                <Button className="hover:text-accent-hover transaction-all"
                                    color="black"
                                    size="lg"
                                    variant="outlined"
                                    ripple={true}
                                    onClick={() => dispatch(filterProducts(button))}
                                >{button}</Button>
                            </Link>
                        </div>
                    )
                })}

            </div>
            <div className="bg-black w-[80%] rounded-full mx-auto">
                <h3 className="flex text-white items-center justify-center p-3 mb-4">Recommended</h3>
            </div>
        </div>
    )
}

export default NavigateLinks
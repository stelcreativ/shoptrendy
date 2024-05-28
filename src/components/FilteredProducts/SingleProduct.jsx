import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Tooltip, Button } from '@material-tailwind/react'
import { addToCart } from '../../features/slices/cartSlice'
import { useDispatch } from 'react-redux'

const SingleProduct = () => {
    const product = useSelector((state) => state.products.singleProduct)
    const productSize = product[0].size ? product[0].size[0] : ""
    const dispatch = useDispatch()
    const [size, setSize] = useState(productSize)
    console.log("singleProduct", product)


    return (
        <div>
            {product
                .map((item, index) => {
                    return (
                        <div key={index} className="flex justify-center items-center py-10">
                            <div className="pl-44">
                                <img
                                    className="h-[750px] w-full rounded-lg"
                                    src={item.img}
                                    alt={item.title}
                                ></img>
                            </div>
                            <div>
                                <div className="grow-[3] px-5">
                                    <div className="max-w-lg">
                                        <h5 className="text-2xl">
                                            {item.title}
                                        </h5>
                                        <p>
                                            {item.text}
                                        </p>
                                        <div className="pb-4">
                                            {item.size ? (
                                                <div>
                                                    <label
                                                        htmlFor="size"
                                                    >
                                                        Select a size
                                                    </label>
                                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        id="size"
                                                        name="size"
                                                        value={size}
                                                        onChange={(e) => setSize(e.target.value)}

                                                    >
                                                        {item.size.map((item, index) => {
                                                            return (
                                                                <option key={index} value={item}>{item}</option>
                                                            )
                                                        })}

                                                    </select>
                                                </div>
                                            ) : (
                                                <div>
                                                    <label
                                                        htmlFor="size"
                                                    >
                                                        Select a size
                                                    </label>
                                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        id="size"
                                                        name="size"
                                                        value={size}
                                                        onChange={(e) => setSize(e.target.value)}

                                                    >
                                                        {item?.size?.map((item, index) => {
                                                            return (
                                                                <option key={index} disabled={true} value={item}>{item}</option>
                                                            )
                                                        })}

                                                    </select>
                                                </div>
                                            )

                                            }               <Tooltip content="Add to Cart" placement="button">
                                                <Button
                                                    color="gray"
                                                    size="lg"
                                                    variant="outlined"
                                                    ripple={true}
                                                    onClick={() =>
                                                        dispatch(
                                                            addToCart({
                                                                id: item.id,
                                                                name: item.text,
                                                                size: size,
                                                                price: item.price,
                                                                amount: 1
                                                            })
                                                        )
                                                    }
                                                >
                                                    ADD
                                                </Button>
                                            </Tooltip>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SingleProduct
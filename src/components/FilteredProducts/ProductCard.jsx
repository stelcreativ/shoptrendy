import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react"
import { useDispatch } from 'react-redux'
import { singleProduct } from '../../features/slices/productSlice'
import { Link, useParams } from 'react-router-dom'

const ProductCard = ({ id, title, img, description, price }) => {
    const dispatch = useDispatch()
    const { type } = useParams()
    return (
        <Link to={`/filteredProducts/${type}/` + id}>
            <Card className="w-96" onClick={() => dispatch(singleProduct(id))}>
                <CardHeader color="blue" className="relative">
                    <img src={img} alt="img-bg" className="m-h-[100] w-full" />
                </CardHeader>
                <CardBody className="text-center text-black">
                    <Typography>{title}</Typography>
                    <Typography>{description}</Typography>

                </CardBody>
                <CardFooter className="flex items-center justify-between py-3">
                    <Typography variant="small">{price}</Typography>
                </CardFooter>
            </Card>
        </Link>

    )
}

export default ProductCard
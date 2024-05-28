import { Fragment, useState } from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from '@material-tailwind/react'
import { Tooltip } from '@material-tailwind/react'
import { addToCart } from '../../features/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'


const cart = ({ openModal, setOpen }) => {
    const cart = useSelector((state) => state.cart.cart)
    const totalPrice = useSelector((state) => state.cart.totalPrice)
    return (
        <div>
            {cart.length > 0 ? (
                <Fragment>
                    <Dialog
                        className="border-0 outline-0"
                        open={openModal}
                        handler={() => setOpen(false)}
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0.9, y: -100 },
                        }}
                    >
                        <DialogHeader>Cart</DialogHeader>
                        <DialogBody
                            divider
                            className="flex flex-col justify-center items-center"
                        >
                            {cart.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="grid grid-cols-2 py-4">
                                            <div>
                                                <img className="h[125px] rounded-md"
                                                    src={item.img}
                                                    alt={item.title}
                                                >
                                                </img>
                                                <div>
                                                    <h1>{item.title}</h1>
                                                    <p>{item.desc?.substring(0, 100)}</p></div>
                                            </div>
                                            <div>
                                                <p className="text-black text-sm pt-2">
                                                    Selected size {""}
                                                    <span>{item.size}</span>
                                                </p>
                                            </div>
                                            <p>
                                                <span className="mt-2">{item.price}</span>
                                            </p>
                                            <p className="text-black text-sm leading-none pt-2">
                                                <span className="mt-2">{item.Totalprice}</span>
                                            </p>
                                            <div className="pt-4">
                                                <Tooltip
                                                    content="Remove from the cart"
                                                    placement="bottom"
                                                >
                                                    <Button
                                                        size="sm"
                                                        color="coral"
                                                        variant="outlined"
                                                    >
                                                        Remove
                                                    </Button>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </DialogBody>
                    </Dialog>
                </Fragment>

            ) : (
                <Fragment>

                </Fragment>
            )

            }
        </div>
    )
}

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
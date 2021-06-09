import { Button, message } from 'antd';
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { addToCart, selectCart, setItemCount } from "./cartSlice"
import { ProductCardProps } from "../products/types"
import { useEffect, useState } from "react"

export const AddToCart = ({ product }: ProductCardProps) => {

    const { category, title, description, price, image, id } = product

    const dispatch = useAppDispatch()
    const status = useAppSelector(selectCart)

    const [isItemIncart, setIsItemInCart] = useState(false)

    useEffect(() => {
        if (status.cart.find(item => item.id === id)) {
            setIsItemInCart(true)
        } else {
            setIsItemInCart(false)
        }

    }, [status])

    const handleAddToCart = () => {

        if (status.cart.find(item => {
            return item.id === id
        })) {

            try {
                dispatch(setItemCount({ id, value: 1 }))

                message.success('Item amount successfully changed');
            } catch (error) {
                message.error('Something went wrong. The item amount was not increased');
            }
        } else {
            try {
                dispatch(addToCart({
                    id,
                    title,
                    price,
                    image,
                    description,
                    category,
                    count: 1
                }))
                message.success('Item successfully added to cart');
            } catch (error) {
                message.error('Something went wrong. The item was not added to the cart');
            }
        }

    }

    return (
        <div className="product-card-btn-container">
            <Button
                disabled={isItemIncart}
                onClick={handleAddToCart}
                className="product-card-btn"
                type="primary"
                shape="round"
                size="large">
                {isItemIncart ? "Item in Cart" : "Add to Cart"}

            </Button>
        </div>
    )
}
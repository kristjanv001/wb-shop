import { useAppDispatch, useAppSelector } from "../app/hooks"
import { removeFromCart, selectCart, setItemCount } from "../features/cart/cartSlice"
import { selectAuth } from "../features/auth/authSlice"
import { Divider, Button, InputNumber } from 'antd';
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"

export default function Cart() {
  const dispatch = useAppDispatch()
  const cart = useAppSelector(selectCart)
  const authState = useAppSelector(selectAuth)
  const router = useRouter()

  const [isCartEmpty, setIsCartEmpty] = useState(true)

  useEffect(() => {
    if (cart.cart.length < 1) {
      setIsCartEmpty(true)
    } else {
      setIsCartEmpty(false)
    }
  }, [cart])

  const getSubtotal = () => {

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })

    let subTotal = 0;

    cart.cart.forEach((item) => {
      subTotal += (item.price * item.count)
    })
    return formatter.format(subTotal)
  }

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id))
  }

  const handleQtyChange = (value: number, id: string) => {
    dispatch(setItemCount({ id, value }))
  }

  const handleCheckoutClick = () => {
    if (authState.user?.email) {
      router.push("/checkout")
    } else {
      router.push("/signin")
    }
  }

  return (
    <main>
      <h2>Shopping Basket</h2>
      <div className="page-container">
        {isCartEmpty && <h3>Your shopping basket is empty</h3>}
        {!isCartEmpty && cart.cart.map((item) => {
          return (
            <div key={item.id}>
              <div className="checkout-container-item-container">
                <div className="checkout-img-container">
                  <img className="checkout-img" src={item.image} />
                </div>

                <div>
                  <h3 className="checkout-item-title">{item.title}</h3>
                  <strong>${item.price}</strong>
                  {" "}
                  <Button onClick={() => handleRemove(item.id)} type="link">Delete</Button>
                  <div>
                    <InputNumber
                      min={1}
                      max={10}
                      value={item.count}
                      onChange={(value) => { handleQtyChange(value, item.id) }} />
                  </div>
                </div>

              </div>
              <Divider />
            </div>
          )
        })}

        <div className="cart-subtotal">
          <div>
            {!isCartEmpty && <p>{`Subtotal (${cart.cart.length} items): ${getSubtotal()}`}</p>}
          </div>

          <div>
            {!isCartEmpty && <Button onClick={handleCheckoutClick} size="large" type="primary">Proceed to Checkout</Button>}
          </div>

        </div>

      </div>
    </main>
  )
}


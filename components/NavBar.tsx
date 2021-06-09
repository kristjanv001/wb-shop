import { message, Badge, Button } from 'antd';
import Link from "next/link"
import { ShoppingOutlined } from '@ant-design/icons';
import { useAppSelector } from "../app/hooks"
import { selectCart } from "../features/cart/cartSlice"
import { selectAuth } from "../features/auth/authSlice"
import { auth } from "../lib/firebase"
import { useRouter } from 'next/router'
import { SideDrawer } from "./SideDrawer"
import { useState, useEffect } from "react"

export const NavBar = () => {
  const status = useAppSelector(selectCart)
  const authStatus = useAppSelector(selectAuth)
  const router = useRouter()
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    setCartCount(status.cart.length)
  }, [status])

  const onSignOut = () => {
    try {
      auth.signOut()
      message.success("You are signed out")
      router.push("/")
    } catch (error) {
      message.error("Something went wrong. Unable to sign out.")
    }
  }

  const onSignIn = () => {
    router.push("/signin")
  }

  return (
    <header className="header" >
      <div className="header-container" >

        <div>
          <Link href="/">
            <a className="logo-text">Wb Shop 🛍️</a>
          </Link>
        </div>

        <nav className="header-nav-items">



          <div className="header-nav-menu">
            {authStatus?.user?.email
              ? <Button onClick={onSignOut} type="link">Log out</Button>
              : <Button onClick={onSignIn} type="link">Sign In</Button>}
          </div>

          <Badge count={cartCount} showZero>
            <Link href="/cart">
              <a>
                <ShoppingOutlined style={{ fontSize: '36px' }} />
              </a>
            </Link>
          </Badge>
          <div className="side-drawer">
            <SideDrawer onSignIn={onSignIn} onSignOut={onSignOut} />
          </div>
        </nav>
      </div>
    </header>
  )
}
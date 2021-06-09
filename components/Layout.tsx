import { ReactNode } from "react"
import 'antd/dist/antd.css';
import { NavBar } from "./NavBar"
import { Footer } from "./Footer"
import { Banner } from "./Banner"
import React from "react"
import { useRouter } from 'next/router'
import { useAppDispatch } from "../app/hooks"
import { useEffect } from "react"
import { auth } from "../lib/firebase"
import { setUser } from "../features/auth/authSlice"

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {

  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((fbUser) => {
      if (fbUser) {
        dispatch(setUser({
          email: fbUser?.email
        }))
      } else {
        dispatch(setUser(null))
      }

    })
    return unsubscribe
  }, [])


  return (
    <>
      <NavBar />
      {router.pathname === "/" && < Banner />}
      <div className="content" >
        {children}
        <img className="product-card-list-img" src="https://images.unsplash.com/photo-1602810319428-019690571b5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
        <Footer />
      </div>

    </>
  )
}
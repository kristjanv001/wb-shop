import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout"
import Head from 'next/head';
import { store } from "../app/store"
import { Provider } from "react-redux"

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛍️</text></svg>"
        />
        <title>Wb Shop</title>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>

    </>
  )

}

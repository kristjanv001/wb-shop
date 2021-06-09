import { GetStaticPaths, GetStaticProps } from "next"
import { Product } from "../../features/products/types"
import { AddToCart } from "../../features/cart/AddToCart"

type ProductDetailsProps = {
    product: Product
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch("https://fakestoreapi.com/products/")
    const data = await res.json()
    const paths = data.map((product: Product) => {
        return {
            params: { id: product.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(`https://fakestoreapi.com/products/${context?.params?.id}`)
    const data = await res.json()

    return {
        props: { product: data }
    }
}

export default function ProductDetails(props: ProductDetailsProps) {
    const { product } = props

    return (
        <main>
            <div className="page-container product-details-container ">
                <img className="product-details-img" src={product.image} />
                <div className="product-details-inf">
                    <h2 className="product-details-title">{product.title}</h2>
                    <p>{product.description}</p>
                    <strong>${product.price}</strong>
                    <AddToCart product={product} />
                </div>
            </div>

        </main>
    )
}
import { GetServerSideProps } from "next"
import { ProductCard } from "../features/products/ProductCard"
import { ProductProps, Product } from "../features/products/types"
import { Banner } from "../components/Banner"


export const getServerSideProps: GetServerSideProps = async (context) => {
  const request = await fetch("https://fakestoreapi.com/products")
  const data = await request.json()


  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { products: data },
  }
}

export default function Home({ products }: ProductProps) {

  return (
    <main>
      <div className="product-card-list-container">

        <div className="product-card-list">
          {products && products.filter((product) => product.category == "women's clothing" || product.category == "men's clothing").map((product: Product) => {
            return (
              <ProductCard key={product.id} product={product} />
            )
          })}

        </div>
      </div>

    </main>

  )
}


import { Card } from 'antd';
import { truncateStr } from "../../lib/truncateStr"
import Image from "next/image"
import { ImageLoaderProps } from "next/image"
import Link from "next/link"
import { ProductCardProps } from "./types"
import { AddToCart } from "../cart/AddToCart"

export const ProductCard = ({ product }: ProductCardProps) => {
  const { category, title, description, price, image } = product
  const myLoader = ({ src, width, quality }: ImageLoaderProps) => `${src}?w=${width}&q=${quality || 55}`

  return (
    <Card
      title={category}
      bordered={true}
      size="small"
      className="product-card"
      cover={
        <Image
          className="product-card-img"
          loader={myLoader}
          src={image}
          alt={title}
          width={500}
          height={500}
        />}
      actions={[
        <AddToCart
          product={product} />
      ]}
    >
      <Card.Meta
        title={<Link href={`/products/${product.id}`}>{title}</Link>}
        description={truncateStr(description, 80)} />
      <div className="product-card-price-container">
        <span>$</span><strong>{price.toString()}</strong>
      </div>
    </Card>
  )
}
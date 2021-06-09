import { ReactNode } from "react";

export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  count: number | any;
};

export type ProductProps = {
  products: Product[];
};

export type ProductCardProps = {
  product: Product;
};

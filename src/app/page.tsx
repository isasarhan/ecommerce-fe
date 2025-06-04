import ProductCard from "@/components/common/products/product-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { GET_PRODUCTS } from "@/gql/products";
import { client } from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import type { FC } from 'react';
import * as R from 'ramda'
import { IProduct, IProductCategory, IProductsResponse } from "@/types/product";
import HomeModule from "@/modules/home";
import { GET_PRODUCT_CATEGORIES } from "@/gql/product-category";

interface HomeProps { }

const fetchProducts = async () => {
  const res = await client.query({
    query: GET_PRODUCTS,
    fetchPolicy: 'no-cache',
  })
  return R.pathOr({}, ['data', 'getProducts'], res) as IProductsResponse
}

const fetchProductCategories = async () => {
  const res = await client.query({
    query: GET_PRODUCT_CATEGORIES,
    fetchPolicy: 'no-cache',
  })
  return R.pathOr([], ['data', 'getProductCategories'], res) as IProductCategory[]
}

const Home: FC<HomeProps> = async () => {
  const products = await fetchProducts()  
  const categories = await fetchProductCategories()

  return (
    <HomeModule products={products?.data} categories={categories} />
  )
}

export default Home;

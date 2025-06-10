import { GET_PRODUCT_CATEGORIES } from '@/gql/product-category';
import { GET_PRODUCTS } from '@/gql/products';
import { client } from '@/lib/apollo-client';
import ShopModule from '@/modules/shop';
import { IProduct, IProductCategory, IProductsResponse } from '@/types/product';
import type { FC } from 'react';
import * as R from 'ramda'

const fetchProducts = async (filteredCategories?: string) => {
    const res = await client.query({
        query: GET_PRODUCTS,
        fetchPolicy: 'no-cache',
        variables: {
            categories: filteredCategories ? filteredCategories.split('&') : []
        }
    })
    return R.pathOr({}, ['data', 'getProducts'], res) as IProductsResponse
}

const fetchProductCategories = async () => {
    const res = await client.query({
        query: GET_PRODUCT_CATEGORIES,
    })
    return R.pathOr([], ['data', 'getProductCategories'], res) as IProductCategory[]
}

interface ShopPageProps {
    searchParams: Promise<{ filteredCategories: string }>
}

const ShopPage: FC<ShopPageProps> = async ({ searchParams }) => {
    const { filteredCategories } = await searchParams

    const [products, categories] = await Promise.all([fetchProducts(filteredCategories), fetchProductCategories()])
    
    return (
        <ShopModule products={products} categories={categories} />
    );
}

export default ShopPage;

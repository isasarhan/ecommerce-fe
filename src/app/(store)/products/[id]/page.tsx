import ProductModule from '@/modules/products';
import type { FC } from 'react';
import * as R from 'ramda'
import { client } from '@/lib/apollo-client';
import { GET_PRODUCT } from '@/gql/products';
import { IProduct } from '@/types/product';

interface ProductPageProps {
    params: Promise<{ id: string }>
}
const fetchProduct = async (id: string) => {
    const res = await client.query({
        query: GET_PRODUCT,
        variables: { id },
        fetchPolicy: 'no-cache',
    })
    return R.pathOr({}, ['data', 'getProductById'], res) as IProduct
}
const ProductPage: FC<ProductPageProps> = async ({ params }) => {
    const { id } = await params
    const product = await fetchProduct(id)    
    
    return (
        <ProductModule product={product}/>
    );
}

export default ProductPage;

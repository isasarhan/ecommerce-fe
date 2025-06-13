import { GET_PRODUCTS } from '@/gql/products';
import { client } from '@/lib/apollo-client';
import AdminProductsModule from '@/modules/admin/products';
import type { FC } from 'react';
import * as R from 'ramda'
import { IProductsResponse } from '@/types/product';
import Title from '@/components/common/title';

const fetchProducts = async () => {
    const res = await client.query({
        query: GET_PRODUCTS,
        fetchPolicy: 'no-cache',
    })
    return R.pathOr({}, ['data', 'getProducts'], res) as IProductsResponse
}


interface AdminProductsPageProps { }

const AdminProductsPage: FC<AdminProductsPageProps> = async () => {
    const products = await fetchProducts()

    return (
        <>
            <Title text='All Products' buttonText='Add Product' url='/admin/products/add' />
            <AdminProductsModule products={products} />
        </>
    );
}

export default AdminProductsPage;

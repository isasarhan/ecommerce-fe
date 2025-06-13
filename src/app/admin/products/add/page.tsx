import Title from '@/components/common/title';
import { GET_PRODUCT_CATEGORIES } from '@/gql/product-category';
import { client } from '@/lib/apollo-client';
import AddProductModule from '@/modules/admin/products/add';
import { IProductCategory } from '@/types/product';
import type { FC } from 'react';
import * as R from 'ramda'

interface AddProductPageProps { }

const fetchProductCategories = async () => {
    const res = await client.query({
        query: GET_PRODUCT_CATEGORIES,
    })
    return R.pathOr([], ['data', 'getProductCategories'], res) as IProductCategory[]
}

const AddProductPage: FC<AddProductPageProps> = async () => {
    const categories = await fetchProductCategories()
    return (
        <>
            <Title text='New Product' goBack />
            <AddProductModule categories={categories}/>
        </>
    );
}

export default AddProductPage;

import ProductsSidebar from '@/components/common/filters/products-sidebar';
import ProductCard from '@/components/common/products/product-card';
import { IProductCategory, IProductsResponse } from '@/types/product';
import type { FC } from 'react';

interface ShopModuleProps {
    products: IProductsResponse
    categories: IProductCategory[]
}

const ShopModule: FC<ShopModuleProps> = ({ products, categories }) => {
    return (
        <>
            <div className="grid grid-cols-5 gap-4 relative">
                <div>
                    <ProductsSidebar categories={categories} />
                </div>
                <div className='col-span-4 m-4'>
                    <div className='grid grid-cols-4 gap-5'>
                        {products.data.map((product) =>
                            <ProductCard product={product} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShopModule;

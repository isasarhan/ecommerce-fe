import CategoriesCarousel from '@/components/common/categories/categories-carousel';
import Spacer from '@/components/common/spacer';
import { IProduct, IProductCategory } from '@/types/product';
import type { FC } from 'react';
import ProductsCarousel from '@/components/common/products/products-carousel';
import HomeSlider from './home-slider';

interface HomeModuleProps {
    products: IProduct[],
    categories: IProductCategory[]
}

const HomeModule: FC<HomeModuleProps> = ({ products, categories }) => {
    return (
        <>
            <HomeSlider/>
            <ProductsCarousel products={products} />
            <Spacer size='md' />
            <CategoriesCarousel categories={categories} />
        </>
    );
}

export default HomeModule;

import CategoriesCarousel from '@/components/common/categories/categories-carousel';
import Spacer from '@/components/common/spacer';
import { IProduct, IProductCategory } from '@/types/product';
import type { FC } from 'react';
import ProductsCarousel from '@/components/common/products/products-carousel';
import HomeSlider from './home-slider';
import IsSignIn from '@/components/auth/signin';
import SectionTitle from '@/components/common/title/section-title';

interface HomeModuleProps {
    products: IProduct[],
    categories: IProductCategory[]
}

const HomeModule: FC<HomeModuleProps> = ({ products, categories }) => {
    return (
        <>
            <HomeSlider />
            <div className='p-8'>
                <SectionTitle title='Featured Products'/>
                <ProductsCarousel products={products} />
                <IsSignIn>
                    <Spacer size='md' />
                </IsSignIn>
                <CategoriesCarousel categories={categories} />
                <Spacer size='md' />
            </div>
        </>
    );
}

export default HomeModule;

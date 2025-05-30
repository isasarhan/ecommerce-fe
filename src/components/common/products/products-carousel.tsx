'use client'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { IProduct } from '@/types/product';
import Autoplay from 'embla-carousel-autoplay';
import type { FC } from 'react';
import ProductCard from './product-card';

interface ProductsCarouselProps {
    products: IProduct[],
}

const ProductsCarousel: FC<ProductsCarouselProps> = ({ products }) => {
    return (
        <div className='p-8'>
            <div className="flex justify-center">
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 4000,
                        }),
                    ]}
                    opts={{
                        align: "start",
                    }}
                    className="w-full relative"
                >
                    <CarouselContent>
                        {products.map((product) => (
                            <CarouselItem key={product._id} className="md:basis-1/2 lg:basis-1/4">
                                <div className="p-1">
                                    <div className="">
                                        <ProductCard product={product} />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="absolute left-16 top-1/2"><CarouselPrevious /></div>
                    <div className="absolute right-16 top-1/2"><CarouselNext /></div>
                </Carousel>
            </div>
        </div>
    );
}

export default ProductsCarousel;

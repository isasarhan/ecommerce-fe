'use client'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { IProductCategory } from '@/types/product';
import type { FC } from 'react';
import CircularCategory from './category-circle';
import Autoplay from 'embla-carousel-autoplay';

interface CategoriesCarouselProps {
    categories: IProductCategory[]
}

const CategoriesCarousel: FC<CategoriesCarouselProps> = ({ categories }) => {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000,
                    stopOnFocusIn:true
                }),
            ]}
            opts={{
                align: "start",
            }}
            className="w-full relative"
        >
            <CarouselContent>
                {categories.map((category) => (
                    <CarouselItem key={category._id} className="md:basis-1/2 lg:basis-1/5">
                        <div className="p-1">
                            <div className='flex justify-center '>
                                <CircularCategory category={category} />
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}

export default CategoriesCarousel;

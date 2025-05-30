'use client'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import type { FC } from 'react';

interface HomeSliderProps { }

const HomeSlider: FC<HomeSliderProps> = () => {
    return (
        <div>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 6000,
                    }),
                ]}
                opts={{
                    align: "start",
                }}
                className="w-full relative"
            >
                <CarouselContent>
                    <CarouselItem >
                        <Image src={'/images/banner-1.jpg'} height={1800} width={5000} alt='banner-1' />
                    </CarouselItem>
                    <CarouselItem >
                        <Image src={'/images/banner-2.jpg'} height={1800} width={5000} alt='banner-1' />
                    </CarouselItem>
                </CarouselContent>
                <div className="absolute left-16 top-1/2"><CarouselPrevious /></div>
                <div className="absolute right-16 top-1/2"><CarouselNext /></div>
            </Carousel>
        </div>
    );
}

export default HomeSlider;

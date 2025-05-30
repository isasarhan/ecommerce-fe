import { IProductCategory } from '@/types/product';
import Image from 'next/image';
import type { FC } from 'react';

interface CircularCategoryProps {
    category: IProductCategory
}

const CircularCategory: FC<CircularCategoryProps> = ({category}) => {
    return (
        <>
            <div className='flex items-center flex-col gap-3'>
                <Image className='rounded-full h-44 w-44 bg-white object-contain p-3' src={'/images/tv.jpg'} width={300} height={300} alt='tv' />
                <span className='font-semibold'>{category.name}</span>
            </div>
        </>
    );
}

export default CircularCategory;

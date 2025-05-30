import Image from 'next/image';
import type { FC } from 'react';
import { Button } from '../../ui/button';
import { Heart } from 'lucide-react';
import { Badge } from '../../ui/badge';
import { IProduct } from '@/types/product';

interface ProductCardProps {
    product: IProduct
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    return (
        <div className='bg-white relative w-full'>
            <div className='absolute left-5 top-5'>
                {product.salePrice && <Badge variant={'destructive'} className='rounded text-sm italic'>Sale</Badge>}
            </div>
            <Image className='w-full' src={'/images/headphones.jpg'} height={300} width={300} alt='headphones' />
            <section className='p-3 flex flex-col gap-3'>
                <h2 className='w-72 text-wrap'>{product.name}</h2>
                <div className='flex gap-2'>
                    <span className='text-slate-700 text-lg line-through'>{product.price} </span>To
                    <span className='text-red-500 font-bold'>{product.salePrice}</span>
                </div>
                <div className='w-full flex items-center gap-3'>
                    <Button variant={'outline'} className='rounded-full flex-1'>Quick Add</Button>
                    <Button variant={'outline'} className='rounded-full w-10 h-10 hover:bg-red-500 hover:text-white' size={'icon'}><Heart /></Button>
                </div>
            </section>

        </div>
    );
}

export default ProductCard;

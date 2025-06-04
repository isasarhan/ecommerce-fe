'use client'
import Image from 'next/image';
import type { FC } from 'react';
import { Button } from '../../ui/button';
import { Heart } from 'lucide-react';
import { Badge } from '../../ui/badge';
import { IProduct } from '@/types/product';
import { useAppStore } from '@/store';
import Link from 'next/link';

interface ProductCardProps {
    product: IProduct
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const { addToCart, isInCart } = useAppStore()
    const isAdded = isInCart(product._id)
    return (
        <div className='bg-white relative w-full'>
            <div className='absolute right-5 top-5 z-50'>
                {product.salePrice && <Badge variant={'destructive'} className='rounded text-sm italic'>Sale</Badge>}
            </div>
            <div className='overflow-hidden'>
                <Image className='w-full hover:scale-125 transition ease-in-out duration-300 overflow-hidden' src={'/images/headphones.jpg'} height={300} width={300} alt='headphones' />
            </div>
            <section className='p-3 flex flex-col gap-3'>
                <h2 className='w-72 text-wrap'>
                    <Link href={`/products/${product._id}`}>{product.name}</Link>
                </h2>
                <div className='flex gap-2'>
                    <span className='text-slate-700 text-lg line-through'>{product.price} </span>To
                    <span className='text-red-500 font-bold'>{product.salePrice}</span>
                </div>
                <div className='w-full flex items-center gap-3'>
                    <Button
                        variant={'outline'}
                        className='rounded-full flex-1 disabled:bg-primary disabled:text-white'
                        disabled={isAdded}
                        onClick={() => addToCart(product, 1)}>
                        {isAdded ? 'Added!' : 'Quick Add'}
                    </Button>
                    <Button variant={'outline'} className='rounded-full w-10 h-10 hover:bg-red-500 hover:text-white' size={'icon'}><Heart /></Button>
                </div>
            </section>

        </div>
    );
}

export default ProductCard;

'use client'
import Image from 'next/image';
import type { FC } from 'react';
import { Button } from '../../ui/button';
import { Heart, Share2, ShoppingCart } from 'lucide-react';
import { Badge } from '../../ui/badge';
import { IProduct } from '@/types/product';
import { useAppStore } from '@/store';
import Link from 'next/link';
import { isNewProduct } from '@/lib/date';
import { useUserContext } from '@/providers/global-data-provider';
import { toast } from 'sonner';
import Rating from './rating';
import { cn } from '@/lib/utils';

interface ProductCardProps {
    product: IProduct
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const { data, addToCart, addToWishlist } = useUserContext()
    const { isInCart, getProduct } = useAppStore()
    const productInCart = getProduct(product._id)
    const isAdded = isInCart(product._id)
    const isNew = isNewProduct(product.createdAt)
    
    const isInWishlist = data?.wishlist?.products.some((p) => p._id === product._id)

    const handleAddtoWishlist = () => {
        if (!data)
            return toast.warning("Login in to add to wishlist!")

        addToWishlist(product._id)
    }

    return (
        <div className='bg-white relative w-full border rounded-2xl overflow-hidden'>
            <div className='absolute right-3 top-3 z-10'>
                {product.salePrice && <Badge variant={'destructive'} className='rounded text-sm italic'>Sale</Badge>}
            </div>
            <div className='overflow-hidden'>
                {isNew && <Badge className='bg-green-800 z-10 text-sm italic absolute top-0 left-0 rounded-none rounded-br-lg'>New</Badge>}
                <Image className='w-full object-fill hover:scale-125 transition ease-in-out duration-300 overflow-hidden' src={'/images/headphones.jpg'} height={300} width={300} alt='headphones' />
            </div>
            <section className='p-3 flex flex-col gap-3'>
                <h2 className='w-72 text-wrap text-lg'>
                    <Link href={`/products/${product._id}`}>{product.name}</Link>
                </h2>
                <Rating rating={product.rating} />
                {
                    product.salePrice ?
                        <div className='flex items-center gap-2'>
                            <span className='text-slate-700 line-through'>${product.price.toFixed(2)} </span>To
                            <span className='text-red-500 text-lg font-bold'>${product.salePrice?.toFixed(2)}</span>
                        </div> :
                        <div>
                            <span className='text-slate-700 text-lg font-bold'>${product.price.toFixed(2)} </span>
                        </div>
                }
                <div className='w-full flex items-center justify-center gap-3'>
                    <Button variant={'outline'} onClick={() => addToCart(product, 1)}
                        className='relative rounded-full w-10 h-10 hover:bg-primary hover:text-white' size={'icon'}>
                        <ShoppingCart />
                        {isAdded &&
                            <Badge className='absolute -top-2 -right-1 w-5 h-5 rounded-full '>
                                <span>{productInCart ? productInCart.quantity : 1}</span>
                            </Badge>}
                    </Button>
                    <Button variant={'outline'} onClick={handleAddtoWishlist}
                        className={cn('rounded-full w-10 h-10 hover:bg-red-500 hover:text-white transition ease-in-out duration-500', 
                            isInWishlist? 'bg-red-500 text-white' :''
                        )} size={'icon'}>
                        <Heart />
                    </Button>
                    <Button variant={'outline'}
                        className='rounded-full w-10 h-10 hover:bg-secondary hover:text-primary' size={'icon'}>
                        <Share2 />
                    </Button>
                </div>
            </section>

        </div>
    );
}

export default ProductCard;

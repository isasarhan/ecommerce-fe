'use client'
import { Button } from '@/components/ui/button';
import { useUserContext } from '@/providers/global-data-provider';
import { X } from 'lucide-react';
import Image from 'next/image';
import type { FC } from 'react';

interface WishlistModuleProps { }

const WishlistModule: FC<WishlistModuleProps> = () => {
    const { data, addToWishlist } = useUserContext()
    const wishlist = data?.wishlist

    return (
        <div>
            <h2 className='text-center mt-5 text-5xl'>Wishlist</h2>
            <div className="h-[50vh] flex items-center ">
                <div className="grid gap-8 w-full">
                    {
                        wishlist?.products.length === 0 ? <span>Cart is empty</span> : wishlist?.products.map((product) => (
                            <div key={product._id} className='relative'>
                                <div className='w-full flex gap-5 items-center justify-between'>
                                    <Image className='rounded' src={'/images/headphones.jpg'}
                                        height={100} width={100} alt='headphones' />
                                    <span>{product.name}</span>
                                    <span>${product.price}</span>
                                    <Button className=' rounded-full h-5 w-5'
                                        size={'icon'} variant={'destructive'} onClick={() => addToWishlist(product._id)}>
                                        <X />
                                    </Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default WishlistModule;

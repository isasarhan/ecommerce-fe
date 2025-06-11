'use client'
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useUserContext } from '@/providers/global-data-provider';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import type { FC } from 'react';

interface WishlistBtnProps { }

const WishlistBtn: FC<WishlistBtnProps> = () => {
    const { data, addToWishlist } = useUserContext()
    const wishlist = data?.wishlist
    return (
        <Link href={'/wishlist'}>
            <Button variant="outline" size="icon" className='relative'>
                <Badge className='rounded-full absolute w-5 h-5 -top-2 -right-2 bg-red-500 flex items-center justify-center'>
                    {wishlist?.products.length}
                </Badge>
                <Heart className="h-6 w-6" />
            </Button>
        </Link>
    );
}

export default WishlistBtn;

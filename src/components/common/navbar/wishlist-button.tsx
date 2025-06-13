'use client'
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useUserContext } from '@/providers/global-data-provider';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { FC } from 'react';
import { toast } from 'sonner';

interface WishlistBtnProps { }

const WishlistBtn: FC<WishlistBtnProps> = () => {
    const router = useRouter()
    const { data } = useUserContext()
    const wishlist = data?.wishlist

    const handleClick = () => {
        if(!data){
            return toast.warning("Login first to access wishlist!")
        }
        router.push('/wishlist')
    }

    return (
        <Button variant="outline" size="icon" className='relative' onClick={handleClick}>
            {wishlist?.products && <Badge className='rounded-full absolute w-5 h-5 -top-2 -right-2 bg-red-500 flex items-center justify-center'>
                {wishlist?.products.length}
            </Badge>}
            <Heart className="h-6 w-6" />
        </Button>
    );
}

export default WishlistBtn;

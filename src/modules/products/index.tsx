'use client'
import Rating from '@/components/common/products/rating';
import Spacer from '@/components/common/spacer';
import ShopTitle from '@/components/common/title/shop-title';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useAppStore } from '@/store';
import { IProduct } from '@/types/product';
import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import { useState, type FC } from 'react';

interface ProductModuleProps {
    product: IProduct
}

const ProductModule: FC<ProductModuleProps> = ({ product }) => {
    const [quantity, setQuantity] = useState('1')
    const { addToCart, isInCart } = useAppStore()
    const isAdded = isInCart(product._id)

    const handleAddtoCart = () => {
        addToCart(product, parseInt(quantity))
        setQuantity('1')
    }
    return (
        <>
            <div className='grid grid-cols-2 gap-10 p-5'>
                <div >
                    <Image className='w-5/6' src={'/images/headphones.jpg'} height={1500} width={1500} alt='headphones' />
                </div>
                <div className='flex flex-col gap-5'>
                    <Spacer size='lg' />
                    <ShopTitle
                        segments={[
                            { label: 'Home', href: '/' },
                            { label: 'Shop', href: '/shop' },
                            { label: product?.categories?.[0]?.name || "UNCATEGORIZED" }
                        ]}
                    />
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-5xl'>{product.name}</h1>
                        <div className="w-32">
                            <Separator />
                        </div>
                    </div>
                    <Rating rating={product.rating}/>
                    <div className='flex items-center gap-3'>Price: <span className='font-bold text-2xl'>${product.price}</span></div>
                    <div className='flex gap-2'>
                        {
                            product.categories?.map((cat) => (
                                <Badge className='rounded-full p-2 px-4 '>{cat.name}</Badge>
                            ))
                        }
                    </div>
                    <p>{product.description}</p>
                    <div className='flex gap-3'>
                        <Input type='number' min={1} className='w-16' defaultValue={quantity} value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        <Button
                            variant={'outline'}
                            className=' disabled:bg-primary disabled:text-white w-40'
                            onClick={handleAddtoCart}>
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductModule;

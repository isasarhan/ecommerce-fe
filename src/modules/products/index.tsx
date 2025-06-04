'use client'
import Spacer from '@/components/common/spacer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppStore } from '@/store';
import { IProduct } from '@/types/product';
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
                    <h1 className='text-5xl'>{product.name}</h1>
                    <p>{product.description}</p>
                    <div>Price: <span className='font-bold text-2xl'>${product.price}</span></div>
                    <div className='flex gap-2'>
                        {
                            product.categories?.map((cat)=>(
                                <Badge className='rounded-full p-2 px-4 '>{cat.name}</Badge>
                            ))
                        }
                    </div>
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

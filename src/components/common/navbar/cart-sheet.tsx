'use client'
import type { FC } from 'react';
import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingCart, X } from 'lucide-react';
import { useAppStore } from '@/store';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
interface CartSheetProps { }

const CartSheet: FC<CartSheetProps> = () => {
  const { cart, removeFromCart } = useAppStore()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size={'icon'} className='relative'>
          <Badge className='rounded-full absolute w-5 h-5 -top-2 -right-2'>{cart.products.length}</Badge>
          <ShoppingCart />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            add items into your cart to view on checkout.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className='max-h-[70vh] h-full'>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">
            <div className="grid gap-9">
              {
                cart.products.length === 0 ? <span>Cart is empty</span> : cart.products.map((product) => (
                  <div key={product.item._id} className='relative'>
                    <div className='grid grid-cols-3 gap-5 '>
                      <Image className='rounded' src={'/images/headphones.jpg'}
                        height={150} width={150} alt='headphones' />
                      <div className="col-span-2 ">
                        <div className='h-full flex flex-col justify-center'>
                          <span>{product.item.name}</span>
                          <span>${product.item.price} x {product.quantity}</span>
                          <span>Total = <span className='text-red-600'>${product.item.price * product.quantity}</span></span>
                        </div>
                      </div>
                    </div>
                    <Button className='absolute right-0 top-0 rounded-full h-5 w-5'
                      size={'icon'} variant={'destructive'} onClick={() => removeFromCart(product.item._id)}>
                      <X />
                    </Button>
                  </div>
                ))
              }
            </div>
          </div>
        </ScrollArea>
        <SheetFooter>
          <Button type="submit">Go to checkout</Button>

        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default CartSheet;
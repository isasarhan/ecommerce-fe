import { ICart } from "@/types/cart"
import { IProduct } from "@/types/product"
import { StateCreator } from "zustand"

export interface CartSlice {
    cart: { products: { item: IProduct, quantity: number }[] }
    addToCart: (product: IProduct, quantity: number) => void
    removeFromCart: (id: string) => void
}

export const createCartSlice: StateCreator<
    CartSlice,
    [],
    [],
    CartSlice
> = (set, get) => ({
    cart: { products: [] },
    removeFromCart: (id: string) => {
        let cart = get().cart
        cart.products = cart.products.filter((p) => p.item._id !== id)
        set(() => ({
            cart: cart
        }))

    },
    addToCart: (item: IProduct, quantity: number) => {
        let cart = get().cart
        const product = cart.products.find((p) => p.item._id === item._id)
        if (!product)
            cart?.products.push({ item, quantity })
        else {
            cart.products = cart.products.map((p) => {
                if (p.item._id === item._id)
                    return {
                        item: item,
                        quantity: quantity
                    }

                return p
            })
        }
        set(() => ({
            cart: cart
        }))
    },
})
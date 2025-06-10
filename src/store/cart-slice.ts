import { IProduct } from "@/types/product"
import { StateCreator } from "zustand"

export interface CartSlice {
    cart: { products: { item: IProduct, quantity: number }[] }
    addToCart: (product: IProduct, quantity: number) => void
    removeFromCart: (id: string) => void
    isInCart: (id: string) => boolean
    getProduct:(id: string)=> { item: IProduct, quantity: number } | undefined
}

export const createCartSlice: StateCreator<
    CartSlice,
    [],
    [],
    CartSlice
> = (set, get) => ({
    cart: { products: [] },
    getProduct: (id: string) => {
        let cart = get().cart
        return cart.products.find((p) => p.item._id === id)
    },
    isInCart: (id: string) => {
        let cart = get().cart
        return cart.products.some((p) => p.item._id === id)
    },
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
                if (p.item._id === item._id) {
                    const q = quantity !== 1 ?quantity :p.quantity+1 
                    return {
                        item: item,
                        quantity: q
                    }
                }
                return p
            })
        }
        set(() => ({
            cart: cart
        }))
    },
})
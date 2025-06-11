'use client'
import { createContext, useContext, useEffect, useState, type FC, type ReactNode } from 'react';
import Cookies from 'js-cookie';
import { IUser } from '@/types/user';
import { toast } from "sonner"
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';
import { SIGNIN } from '@/gql/auth';
import { CircleIcon } from 'lucide-react';
import { useAppStore } from '@/store';
import { IProduct } from '@/types/product';
import { ADD_TO_CART, UPDATE_CART } from '@/gql/cart';
import { ICart } from '@/types/cart';
import { IWishlist } from '@/types/wishlist';
import { path, pathOr } from 'ramda';
import { ADD_TO_WISHLIST } from '@/gql/wishlist';

interface UserProviderProps {
    children: ReactNode
}

interface UserContextType {
    data: IUserContext | null | undefined,
    isLoggedIn: boolean,
    signIn(email: string, password: string): void
    signOut(): void
    addToCart(product: IProduct, quantity: number): void
    addToWishlist(product: string): void
}

const UserContext = createContext<UserContextType | null>(null)

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserContextProvider');
    }
    return context;
};

export interface IUserContext {
    user: IUser | undefined
    cart: ICart | undefined
    wishlist: IWishlist | undefined
}

const UserProvider: FC<UserProviderProps> = ({ children }) => {
    const { addToCart: add, updateCart } = useAppStore()
    const [addToCartMutation] = useMutation(ADD_TO_CART)
    const [addToWishlistMutation] = useMutation(ADD_TO_WISHLIST)

    const [data, setData] = useState<IUserContext | null>()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [login] = useMutation(SIGNIN)
    const router = useRouter()

    const addToWishlist = async (product: string) => {

        if (isLoggedIn) {
            const res = await addToWishlistMutation({
                variables: {
                    id: data?.wishlist?._id,
                    product
                }
            })
            const wishlist = path(['data', 'addToWishlist'], res) as IWishlist

            setData(
                {
                    cart: data?.cart,
                    user: data?.user,
                    wishlist: wishlist,
                }
            )
        }
    }
    const addToCart = async (product: IProduct, quantity: number) => {
        add(product, quantity)

        if (isLoggedIn) {
            const res = await addToCartMutation({
                variables: {
                    id: data?.cart?._id,
                    item: product._id,
                    quantity
                }
            })
            const cart = path(['data', 'addToCart'], res) as ICart

            setData(
                {
                    cart: cart,
                    user: data?.user,
                    wishlist: data?.wishlist,
                }
            )
        }
    }

    const signIn = async (email: string, password: string) => {
        return await login({
            variables: { email, password }
        }).then((res) => {
            const loginData = res.data?.signIn;
            if (loginData) {
                const data = loginData;
                // if (!user.isApproved) {
                //     toast.error("User not verified!")
                //     return
                // }
                updateCart(data.cart)
                toast.success("Logged In Successfully")
                setData(data)
                setIsLoggedIn(true)
                Cookies.set('data', JSON.stringify(data))
                router.push('/')
            }
        }).catch((e) => {
            console.log(e);

            toast.error("Failed to login", { icon: <CircleIcon fill='red' className='w-4 h-4' /> })
        })
    }

    const signOut = () => {
        Cookies.remove('data')
        setData(null)
        setIsLoggedIn(false)
        router.refresh()
        return
    }

    useEffect(() => {
        const retreiveUserInfo = () => {
            const storedData = Cookies.get("data")
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                setData(parsedData)
                setIsLoggedIn(true)
            }
        }
        if (data)
            Cookies.set('data', JSON.stringify(data))
        else
            retreiveUserInfo()
    }, [data])

    return (
        <UserContext.Provider value={{ data, isLoggedIn, signIn, signOut, addToCart, addToWishlist }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;

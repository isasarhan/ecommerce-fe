'use client'
import { createContext, useContext, useEffect, useState, type FC, type ReactNode } from 'react';
import Cookies from 'js-cookie';
import { IUser } from '@/types/user';
import { toast } from "sonner"
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';
import { SIGNIN } from '@/gql/auth';
import { CircleIcon } from 'lucide-react';

interface UserProviderProps {
    children: ReactNode
}

interface UserContextType {
    user: IUser | null | undefined,
    token: string,
    isLoggedIn: boolean,
    signIn(email: string, password: string): void
    signOut(): void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserContextProvider');
    }
    return context;
};


const UserProvider: FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>()
    const [token, setToken] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [login] = useMutation(SIGNIN)
    const router = useRouter()

    const signIn = async (email: string, password: string) => {
        return await login({
            variables: { email, password }
        }).then((res) => {
            const loginData = res.data?.signIn;
            if (loginData) {
                const { token, user } = loginData;
                // if (!user.isApproved) {
                //     toast.error("User not verified!")
                //     return
                // }
                toast.success("Logged In Successfully")
                setUser(user)
                setIsLoggedIn(true)
                setToken(token)
                Cookies.set('token', token)
                Cookies.set('user', JSON.stringify(user))
                router.push('/')
                return
            }
        }).catch((e) => {
            toast.error("Failed to login", { icon: <CircleIcon fill='red' className='w-4 h-4' /> })
        })
    }
    const signOut = () => {
        Cookies.remove('token')
        Cookies.remove('user')
        setToken('')
        setUser(null)
        setIsLoggedIn(false)
        router.refresh()
        return
    }

    useEffect(() => {
        const retreiveUserInfo = () => {
            const storedUser = Cookies.get("user")
            const storedToken = Cookies.get('token')
            if (storedUser && storedToken) {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser)
                setToken(storedToken)
                setIsLoggedIn(true)
            }
        }
        retreiveUserInfo()
    }, [token])
    return (
        <UserContext.Provider value={{ token, user, isLoggedIn, signIn, signOut }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;

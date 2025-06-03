'use client'
import { useUserContext } from '@/providers/global-data-provider';
import type { FC, ReactNode } from 'react';

interface IsSignInProps {
    children: ReactNode
}

const IsSignIn: FC<IsSignInProps> =({ children }) => {
    const { isLoggedIn } = useUserContext()

    return (
        <>
            {isLoggedIn ? children : <></>}
        </>
    );
}

export default IsSignIn;

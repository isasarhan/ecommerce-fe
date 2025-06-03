'use client'
import { useUserContext } from "@/providers/global-data-provider";
import { FC, ReactNode } from "react";

interface IsSignOutProps {
    children: ReactNode
}

const IsSignOut: FC<IsSignOutProps> = ({ children }) => {
    const { isLoggedIn } = useUserContext()

    return (
        <>
            {!isLoggedIn ? children : <></>}
        </>
    );
}

export default IsSignOut;

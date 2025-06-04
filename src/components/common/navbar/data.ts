import { ReactNode } from "react"

interface IData {
    label: string,
    url: string,
    icon?: ReactNode
}
export const data:IData[] = [
    {
        label: "Home",
        url: "/"
    },
    {
        label: "About",
        url: "/about"
    },
    {
        label: "Contact",
        url: "/contact"
    },
    {
        label: "Shop",
        url: "/shop"
    },
    {
        label: "Cart",
        url: "/cart"
    },
]
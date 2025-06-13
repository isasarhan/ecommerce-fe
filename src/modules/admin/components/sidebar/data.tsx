import { CircleDollarSign, Clock, CreditCard, House, LayoutDashboard, Package, ReceiptText, Upload, User, Users, Weight } from "lucide-react"

export const generateSidebar = (pathName: string) => {
    return {
        navMain: [
            {
                title: "Home",
                url: "/",
                icon: <House />
            },
            {
                title: "Products",
                url: "#",
                items: [
                    {
                        title: "View Products",
                        url: "/admin/products",
                        isActive: pathName === "/admin/products",
                        icon: <Users />
                    },
                    {
                        title: "New Product",
                        url: "/admin/products/add",
                        isActive: pathName === "/admin/products/add",
                        icon: <User />
                    },

                ],
            },
            {
                title: "Users",
                url: "#",
                items: [
                    {
                        title: "View Users",
                        url: "/admin/users",
                        isActive: pathName === "/admin/users",
                        icon: <Users />
                    },
                    {
                        title: "New User",
                        url: "/admin/users/add",
                        isActive: pathName === "/admin/users/add",
                        icon: <User />
                    },

                ],
            },
        ],
    }
}
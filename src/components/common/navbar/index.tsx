"use client"

import * as React from "react"
import Link from "next/link"
import type { FC } from 'react';
import Logo from "../logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { data } from "./data";
import CartSheet from "../cart/cart-sheet";
import UserMenu from "./user-menu";

interface NavbarProps { }

const Navbar: FC<NavbarProps> = () => {
    return (
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-white">
            <div>
                <Logo />
                <span className="sr-only">Acme Inc</span>
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden ms-auto">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-5">

                    <div className="grid gap-2 py-6">
                        {data.map((d, i) => (
                            <Link key={d.label} href={d.url} className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                                {d.label}
                            </Link>
                        ))}
                        <div className="flex gap-5">
                            <UserMenu />
                            <CartSheet />
                        </div>
                    </div>
                </SheetContent>
            </Sheet>

            <nav className="ml-auto hidden lg:flex gap-6 ">
                {data.map((d, i) => (
                    <Link
                        href={d.url}
                        key={d.label}
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                        prefetch={false}
                    >
                        {d.label}
                    </Link>
                ))}
                <UserMenu />
                <CartSheet />
            </nav>
        </header>
    )

}

export default Navbar;

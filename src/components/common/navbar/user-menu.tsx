'use client'
import type { FC } from 'react';
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BadgePlus, CircleArrowRight, User } from 'lucide-react';
import Link from 'next/link';

interface UserMenuProps { }

const UserMenu: FC<UserMenuProps> = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size={'icon'}><User /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44 mx-3" align="start">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href={'/login'} className='w-full flex justify-between items-center'>
                            <span>Sign In</span>
                            <BadgePlus />
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={'/register'} className='w-full flex justify-between items-center'>
                            <span>Register</span>
                            <CircleArrowRight />
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
            {/* if logged in */}
            {/* <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent> */}
        </DropdownMenu>
    )
}

export default UserMenu;

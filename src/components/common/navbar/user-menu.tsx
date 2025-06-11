'use client'
import type { FC } from 'react';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BadgePlus, CircleArrowRight, User } from 'lucide-react';
import Link from 'next/link';
import IsSignIn from '@/components/auth/signin';
import { useUserContext } from '@/providers/global-data-provider';
import IsSignOut from '@/components/auth/signout';
import { getNameInitials } from '@/lib/name-initials';

interface UserMenuProps { }

const UserMenu: FC<UserMenuProps> = () => {
  const { signOut, data } = useUserContext()
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={'icon'}>{
          data?.user ? getNameInitials(data?.user?.firstName, data?.user?.lastName) : <User />
        }</Button>
      </DropdownMenuTrigger>
      <IsSignOut>
        <DropdownMenuContent className="w-44 mx-8" align="start">
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
      </IsSignOut>

      <IsSignIn>
        <DropdownMenuContent className="w-44 mx-8" align="start">
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
          <DropdownMenuItem onClick={signOut}>
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </IsSignIn >
    </DropdownMenu>
  )
}

export default UserMenu;

"use client"
import { Button } from '../../components/ui/button'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from '../../@/components/ui/dropdown-menu'
  
function Header() {
    const {data} = useSession();
    useEffect(()=>{
        console.log(data);
    },[data])

    return (
        <div className='p-5 shadow-sm flex justify-between' >
            <div className='flex items-centre gap-10'>
                <Image src='/AIT_Pune_logo.gif' alt='logo' width={60} height={60}></Image>
                <div className='md:flex items-center gap-6 hidden'>
                    <h2 className='hover:scale-105 hover:text-purple-400 cursor-pointer' >Home </h2>
                    <h2 className='hover:scale-105 hover:text-purple-400 cursor-pointer'>services</h2>
                    <h2 className='hover:scale-105 hover:text-purple-400 cursor-pointer'>About Us</h2>
                </div>
            </div>
            <div>
                {}
                <Button onClick={()=>signIn("descope")}>Login / SignUp</Button>
            </div>
        </div>
    )
}
export default Header

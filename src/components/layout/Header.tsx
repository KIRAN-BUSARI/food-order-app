'use client';
import Link from 'next/link';
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
function Header() {
    const session = useSession();
    const status = session.status;
    // console.log(session)  
    return (
        <>
            <header className='flex items-center justify-between'>
                <Link href={'/'} className='font-semibold text-2xl text-primary'>CANTEEN</Link>
                <nav className='flex items-center gap-8 text-gray-500 font-semibold'>
                    <Link href={'/'} >Home</Link>
                    <Link href={'/menu'} >Menu</Link>
                    <Link href={'/about'} >About</Link>
                    <Link href={'/contact'} >Contact</Link>
                </nav>
                <nav className="flex items-center gap-4 text-gray-500 font-semibold">
                    {status === 'authenticated' ? <button className='bg-primary px-8 py-2 rounded-full text-white' onClick={() => signOut()}>Signout</button> : <>
                        <Link href={'/signin'} >Signin</Link>
                        <Link href={'/signup'} className='text-white bg-primary px-8 py-2 rounded-full'>Signup</Link>
                    </>
                    }
                </nav>
            </header>
        </>
    )
}

export default Header;
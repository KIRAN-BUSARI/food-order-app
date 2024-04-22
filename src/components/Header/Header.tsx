import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <>
            <header className='flex items-center justify-between'>
                <Link href={'/'} className='font-semibold text-2xl text-primary'>CANTEEN</Link>
                <nav className='flex items-center gap-8 text-gray-500 font-semibold'>
                    <Link href={'/'} >Home</Link>
                    <Link href={'/menu'} >Menu</Link>
                    <Link href={'/about'} >About</Link>
                    <Link href={'/contact'} >Contact</Link>
                    <Link href={'/signin'} className='text-white bg-primary px-8 py-2 rounded-full'>Login</Link>
                </nav>
            </header>
        </>
    )
}

export default Header
import React from 'react'
import Image from 'next/image'
import QuestionMark from '../icons/Question-Mark'
import Bag from '../icons/Bag'
import { IoBagHandle } from "react-icons/io5";
function Hero() {
    return (
        <section className='hero'>
            <div className="py-12">
                <h1 className='text-4xl font-semibold leading-normal'>Food is served <br /> to you before you <br /> reach the <span className='text-primary'>&apos;canteen&apos;</span></h1>
                <p className='my-6 text-gray-600 text-sm'>The way the food served makes the food delicious.</p>
                <div className="flex gap-4 text-sm">
                    <button className='flex justify-center bg-primary uppercase items-center gap-2 text-white px-4 py-2 rounded-full'>
                        order now
                        <Bag />
                        {/* <IoBagHandle /> */}
                    </button>
                    <button className='flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold'>
                        Learn more
                        <QuestionMark />
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image src={'/Main-food.png'} alt='food' layout='fill' objectFit='contain' />
            </div>
        </section>
    )
}

export default Hero
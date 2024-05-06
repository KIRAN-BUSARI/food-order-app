import Image from 'next/image'
import React from 'react'

function MenuItem() {
    return (
        <div className="bg-gray-100 group hover:bg-white p-4 text-center rounded-lg transition-all hover:shadow-md hover:shadow-black/25">
            {/* <Image src="/Dosa.png" width={300} height={100} objectFit='contain' alt="Dosa" /> */}
            <div className="text-center">
                <img src="/pizza.png" alt="pizza" className='max-h-auto max-h-24 block mx-auto' />
            </div>
            <h4 className='font-semibold text-xl my-3'>Pizza</h4>
            <p className='text-gray-500 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            <button className='bg-primary px-8 py-2 rounded-full mt-4'>Add to cart $12</button>
        </div>
    )
}

export default MenuItem
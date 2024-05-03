import Image from 'next/image'
import React from 'react'
import MenuItem from '../menu/MenuItem'
import SectionHeaders from './SectionHeaders'

function HomeMenu() {
    return (
        <section className=''>
            <div className="absolute left-0 right-0 w-full justify-start">
                <div className="absolute left-0 -top-[70px] text-left -z-10">
                    <Image src={'/sallad1.png'} width={109} height={189} alt={'sallad'} />
                </div>
                <div className="absolute -top-[100px] right-0 -z-10">
                    <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
                </div>
            </div>
            <SectionHeaders subHeader={'checkout'} mainHeader={"Menu"} />
            <div className="gap-3 grid-cols-3 grid">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </section>
    )
}

export default HomeMenu
import React from 'react'
import SectionHeaders from './SectionHeaders'

function Contact() {
    return (
        <section className='text-center my-8'>
            <SectionHeaders subHeader="Don't Hesitate" mainHeader="Contact Us" />
            <div className="mt-8">
                <a href="tel:+918888888888" className='text-4xl underline text-gray-500'>+918888888888</a>
            </div>
        </section>
    )
}

export default Contact
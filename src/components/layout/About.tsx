import React from 'react'
import SectionHeaders from './SectionHeaders'

function About() {
    return (
        <section className='mt-5'>
            <SectionHeaders mainHeader={"OUR STORY"} subHeader={"ABOUT US"} />
            <div className='flex flex-col gap-4 max-w-lg text-center mx-auto'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ea magni veritatis nobis minima velit adipisci natus repellendus veniam laborum consectetur pariatur, sunt dolores eos iure repudiandae quod dolore illo assumenda impedit enim repellat quas, facilis expedita harum reprehenderit aliquid.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ea magni veritatis nobis minima velit adipisci natus repellendus veniam laborum consectetur praesentium sint dolorum, eum odio, ex nesciunt. Voluptate accusantium voluptates, enim repellat quas, facilis expedita harum reprehenderit aliquid.</p>
            </div>
        </section>
    )
}

export default About
import React from 'react'

function Footer() {
    return (
        <div className='bg-blue-900  p-7 '>
            <div className='sm:text-xl   md:text-5xl flex justify-center  '>
                <div className='space-x-5' >
                    <span className='text-green-600'><ion-icon name="logo-whatsapp"></ion-icon> </span>
                    <span className='text-red-600'><ion-icon name="logo-youtube"></ion-icon> </span>
                    <span className='text-sky-500'><ion-icon name="logo-twitter"></ion-icon> </span>
                    <span className='text-pink-500'><ion-icon name="logo-instagram"></ion-icon> </span>
                    <span className='text-red-600'><ion-icon name="logo-pinterest"></ion-icon> </span>
                </div>
            </div>
            <div className='text-white   p-5'>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className='flex justify-center space-x-4'>
                    <p>
                        Term and  Condition
                    </p>
                    <p>
                        Privacy
                    </p>
                    <p>
                    <p> Copyright @{(new Date().getFullYear())} </p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
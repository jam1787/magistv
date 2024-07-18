'use client'
import { useEffect, useRef } from 'react';
import WhatsAppButton from './WhatsAppButton';

export const ShowWspBtn = () => {
    const whatsappButton = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (whatsappButton.current) {
                window.scrollY > 300
                  ? (whatsappButton.current.style.display = 'flex')
                  : (whatsappButton.current.style.display = 'none')
              }
        };

        window.addEventListener('scroll', handleScroll)

        return () =>
            window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <WhatsAppButton
            reference={whatsappButton}
            classStyle="hidden fixed bottom-3 right-5 md:bottom-5 md:right-7 p-3 bg-[#00CC5D] md:p-3.5 z-20 text-3xl md:text-4xl justify-center items-center rounded-full"
            route='https://wa.link/71fjq4'
        />
    )
}
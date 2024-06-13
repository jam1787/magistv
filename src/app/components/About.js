"use client"
import Image from "next/image"
import brands from "../../../public/brands.png"
import moviesAndSeries from '../../../public/moviesAndSeries.png'
import { useEffect, useRef } from "react"

const About = () => {
    const carouselRef = useRef();
    const itemRefs = useRef([]);
    useEffect(() => {
    
        const handleScroll = () => {
            let proportion =
              carouselRef.current.getBoundingClientRect().top / window.innerHeight;
      
            let index = Math.ceil(-1 * (proportion + 0.5));
      
            itemRefs.current.forEach((item, i) => {
              item.className = "brand-img";
              if (i === index) {
                item.className = "brand-img brand-img-active";
              }
            });
          };
      
          document.addEventListener("scroll", handleScroll);
      
    }, [])    
    
  return (
    <section ref={carouselRef} className="relative w-full flex flex-col md:flex-row gap-6 justify-center 2xl:container 2xl:mx-auto md:pr-8">
        <div className="md:basis-1/2 h-fit flex flex-col gap-10 justify-center text-balance text-white text-center md:text-start">
            <div className="w-full md:h-screen max-w-md md:max-w-xl md:max-h-[55rem] md:flex flex-col justify-center px-5 md:px-8 mx-auto md:mx-0">
                <h2 className="text-3xl md:text-6xl font-semibold pb-8">Canales que siempre quisiste ver</h2>
                <p className="text-xs md:text-sm opacity-85">Aqui puedes observar una lista de canales y programas que se encuentran dentro de la plataforma.</p>
                <p className="py-10"><span className="text-3xl font-semibold pr-1">+1200</span> canales.</p>
            </div>
            <div className="w-full md:h-screen max-w-md md:max-w-xl md:max-h-[55rem] md:flex flex-col justify-center px-5 md:px-8 mx-auto md:mx-0">
                <h2 className="text-3xl md:text-6xl font-semibold pb-8">Las películas y series más vistas</h2>
                <p className="text-xs md:text-sm opacity-85">Cuenta con un catálogo de peliculas y series muy variado </p>
                <p className="py-10"><span className="text-3xl font-semibold pr-1">+10 mil</span> series y películas.</p>
            </div>
        </div>
        <div className="hidden md:block md:basis-1/2 md:sticky top-0 right-0 md:h-screen md:max-h-[55rem]">
            <div ref={el => itemRefs.current[0] = el} className="brand-img brand-img-active">
                <Image className="max-w-[90%]" src={brands} alt='Canales que aparecen en la plataforma' />
            </div>
            <div ref={el => itemRefs.current[1] = el} className="brand-img hidden">
                <Image className="h-[90%] object-contain" src={moviesAndSeries} alt='Canales que aparecen en la plataforma' />
            </div>
        </div>
    </section>
  )
}

export default About
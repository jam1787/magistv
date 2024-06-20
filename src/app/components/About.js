"use client"
import Image from "next/image"
import brands from "../../../public/brands.png"
import moviesAndSeries from '../../../public/moviesAndSeries.png'
import { useEffect, useRef } from "react"

const About = () => {
    const carouselRef = useRef()
    const itemRefs = useRef([])

    useEffect(() => {
      const handleScroll = () => {
        let proportion =
          carouselRef.current.getBoundingClientRect().top / window.innerHeight
  
        let index = Math.ceil(-1 * (proportion + 0.5))
  
        itemRefs.current.forEach((item, i) => {
          item.className = "about-img";
          if (i === index) {
            item.className = "about-img about-img-active";
          }
        })
      }
    
      document.addEventListener("scroll", handleScroll)

      return () => document.removeEventListener("scroll", handleScroll)
    }, [])
    
    return (
      <section ref={carouselRef} id='about'>
        <h2 className="text-4xl md:text-6xl md:leading-[1.1] font-bold mx-auto mb-24 md:mb-0 px-4 text-center max-w-3xl text-balance text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] from-[75%] to-[#8aa3ff] to-[100%]">El contenido que amas en un mismo lugar</h2>
        <div className="relative w-full flex flex-col md:flex-row gap-6 justify-center 2xl:container 2xl:mx-auto md:pr-8">
          <div className="md:basis-1/2 h-fit flex flex-col gap-10 justify-center text-balance text-center md:text-start">
              <div className="w-full md:h-screen max-w-md md:max-w-xl md:max-h-[53rem] md:flex flex-col justify-center px-5 md:px-8 mx-auto md:mx-0">
                  <h2 className="text-2xl md:text-6xl font-semibold pb-8 opacity-85">Canales que siempre quisiste ver</h2>
                  <p className="text-xs md:text-sm opacity-85">Aqui puedes observar una lista de canales y programas que se encuentran dentro de la plataforma.</p>
                  <p className="py-10"><span className="text-3xl font-semibold pr-1 text-transparent bg-clip-text bg-gradient-to-r from-[#f569ff] from-[3%] via-[#8286ff] via-[55%] to-[#29d8ff] to-[100%]">+1200</span> canales.</p>
              </div>
              <div className="w-full md:h-screen max-w-md md:max-w-xl md:max-h-[53rem] md:flex flex-col justify-center px-5 md:px-8 mx-auto md:mx-0">
                  <h2 className="text-2xl md:text-6xl font-semibold pb-8 opacity-85">Las películas y series más vistas</h2>
                  <p className="text-xs md:text-sm opacity-85">Cuenta con un catálogo de peliculas y series muy variado </p>
                  <p className="py-10"><span className="text-3xl font-semibold pr-1 text-transparent bg-clip-text bg-gradient-to-r from-[#f569ff] from-[3%] via-[#8286ff] via-[55%] to-[#29d8ff] to-[100%]">+10 mil</span> series y películas.</p>
              </div>
          </div>
          <div className="hidden md:block md:basis-1/2 md:sticky top-0 right-0 md:h-screen md:max-h-[53rem]">
              <div ref={el => itemRefs.current[0] = el} className="about-img about-img-active">
                  <Image className="max-w-[90%]" src={brands} alt='Canales que aparecen en la plataforma' />
              </div>
              <div ref={el => itemRefs.current[1] = el} className="about-img hidden">
                  <Image className="h-[90%] object-contain" src={moviesAndSeries} alt='Canales que aparecen en la plataforma' />
              </div>
          </div>
        </div>
    </section>
  )
}

export default About
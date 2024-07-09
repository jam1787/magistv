'use client'
import { useEffect, useRef, useState } from "react"
import { aboutData, aboutImgs } from "../utils/aboutData"

const About = () => {
  const carouselRef = useRef()
  const itemRefs = useRef([])
  const [windowWidth, setWindowWidth] = useState(0)
  const minWidth = 767

  useEffect(() => setWindowWidth(window.innerWidth), [])

  useEffect(() => {
    const handleResize = () =>
      setWindowWidth(window.innerWidth)
    
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (windowWidth >= minWidth) {
        let proportion =
          carouselRef.current.getBoundingClientRect().top / window.innerHeight

        let index = Math.ceil(-1 * (proportion + 0.5))

        itemRefs.current.forEach((item, i) => {
          item.className = "about-img"
          if (i === index)
            item.className = "about-img about-img-active"
        })
      }
    }

    document.addEventListener("scroll", handleScroll)

    return () => document.removeEventListener("scroll", handleScroll)
  }, [windowWidth])

  return (
    <section className="pt-24" ref={carouselRef} id='about'>
      <h2 className="text-4xl md:text-5xl md:leading-[1.1] lg:text-6xl font-bold mx-auto mb-24 md:mb-0 px-4 text-center max-w-3xl text-balance text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] from-[75%] to-[#8aa3ff] to-[100%]">El contenido que amas en un mismo lugar</h2>
      <div className="relative w-full flex flex-col md:flex-row gap-6 justify-center 2xl:container 2xl:mx-auto md:pr-8">
        <div className="md:basis-1/2 h-fit flex flex-col gap-10 justify-center text-balance text-center md:text-start">
          {aboutData.map(({ title, description, statistic, statisticNumber, img }, i) =>
            <div key={i} className="w-full md:h-screen max-w-md md:max-w-xl md:max-h-[53rem] md:flex flex-col justify-center px-5 md:px-8 mx-auto md:mx-0">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold pb-8 opacity-85">{title}</h2>
              <p className="text-xs md:text-sm opacity-85">{description}</p>
              <p className="py-10">
                <span className="text-3xl font-semibold pr-1 text-transparent bg-clip-text bg-gradient-to-r from-[#f569ff] from-[3%] via-[#8286ff] via-[55%] to-[#29d8ff] to-[100%]">
                  {statisticNumber}
                </span>
                {statistic}
              </p>
              {windowWidth <= minWidth &&
                <img className="max-w-[90%] mx-auto" src={img} alt={title} loading="lazy"/>
              }
            </div>
          )}
        </div>
        {windowWidth > minWidth &&
          <div className="block basis-1/2 sticky top-0 right-0 h-screen max-h-[53rem]">
            {aboutImgs.map(({ src, alt }, i) =>
              <div
                key={i}
                ref={el => itemRefs.current[i] = el}
                className={i === 0 ? 'about-img about-img-active' : 'about-img hidden'}
              >
                <img className="max-w-[90%]" src={src} alt={alt} loading="lazy"/>
              </div>
            )}
          </div>
        }
      </div>
    </section>
  )
}

export default About
import Link from 'next/link'
import { UseWindowWidth } from '../utils/handleResize'
import WhatsAppButton from '../utils/WhatsAppButton'
import LinkComponent from './LinkComponent'
import { getStrapiData } from '../data/services/get-hero-data'

const Hero = async () => {
  const strapiData = await getStrapiData('/api/home-page')
  const { title, description } = strapiData
  const minWidth = 767

  return (
    <section className='mobile-hero-img overflow-hidden 2xl:container 2xl:m-auto h-screen max-h-[85rem] flex justify-around flex-col md:flex-row md:justify-between items-center md:px-5 lg:px-8 text-balance text-center md:text-start'>
      <header className="relative md:mt-0 max-w-96 px-5 sm:max-w-xl">
        <h1 className="text-[2.7em] font-bold leading-tight sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-[1.15]
          text-transparent bg-clip-text bg-gradient-to-b from-white from-[55%] to-[#90b9ff] md:bg-[radial-gradient(circle_400px_at_10%_0%,_#ffffff,_#90b9ff)]
        ">
          {title}
        </h1>
        <p className='opacity-90 text-sm sm:text-base leading-relaxed font-light pt-5 pb-2 md:py-6 md:pb-10 mb-4 md:text-base md:w-90 md:mx-auto lg:text-lg'>
          {description}
        </p>
        <div className="flex flex-col gap-2 items-center md:flex-row md:gap-4">
          <LinkComponent
            route='#pricing'
            text='Contrata ahora'
            classStyle='link-blue-bg text-white px-12 py-3 font-medium rounded-full transtion hover:opacity-90'
          />
          <LinkComponent
            route='create-account'
            text='Solicita una demo'
            classStyle='link-hero-demo px-10 py-2 bg-transparent text-white font-medium'
          />
        </div>
      </header>
      <UseWindowWidth minWidth={minWidth}>
        <footer className='hero-img overflow-hidden absolute top-[50%] right-0 -translate-y-1/2 -z-10 md:w-[62vw] max-w-[90rem] xl:max-h-[40rem] object-cover'>
          <img src='./homeDesktop.webp' alt='Imagen de peliculas, series y canales de MagisTV' />
        </footer>
      </UseWindowWidth>
    </section>
  )
}

export default Hero
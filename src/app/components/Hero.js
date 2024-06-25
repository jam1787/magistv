import heroImg from '../../../public/hero-magistv.png' 
import Image from 'next/image'
import LinkComponent from './LinkComponent'

const getStrapiData = async (path) => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL
  try {
    const res = await fetch(baseUrl + path, { cache: 'no-store' })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

const Hero = async () => {
  const strapiData = await getStrapiData('/api/home-page')
  const {title, description} = strapiData.data.attributes

  return (
    <section className='2xl:container 2xl:m-auto h-screen max-h-[70rem] flex justify-around flex-col md:flex-row md:justify-between items-center p-5 lg:px-8 text-balance text-center md:text-start'>
      <header className="mt-10 md:mt-0 max-w-80 sm:max-w-xl">
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-[1.15]
          text-transparent bg-clip-text bg-[radial-gradient(circle_280px_at_20%_0%,_#ffffff,_#90b9ff)] md:bg-[radial-gradient(circle_400px_at_10%_0%,_#ffffff,_#90b9ff)]
        ">
          {title}
        </h1>
        <p className='opacity-90 text-sm sm:text-base leading-relaxed font-light py-4 pb-6 md:py-6 md:pb-10 mb-4 md:text-base md:w-90 md:mx-auto lg:text-lg'>
          {description}
        </p>
        <LinkComponent route='#pricing' text='Contrata ahora' classStyle='link-blue-bg text-white px-12 py-3.5 font-medium rounded-full transtion hover:opacity-90' />
      </header>
      <footer className='hero-img md:absolute md:top-0 md:right-0 md:translate-y-1/2 md:-z-10 w-full md:w-[62vw] md:h-[20rem] object-cover'>
        <Image src={heroImg} alt='Imagen de peliculas, series y canales de MagisTV' />
      </footer>
    </section>
  )
}

export default Hero
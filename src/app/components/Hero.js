import heroImg from '../../../public/hero-magistv.png' 
import Image from 'next/image'

const getStrapiData = async (path) => {
  const baseUrl = "http://localhost:1337"
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
    <section className='2xl:container 2xl:m-auto h-screen max-h-[70rem] flex justify-around md:justify-between items-center flex-col md:flex-row p-5 lg:px-8 text-balance text-center md:text-start'>
      <header className="mt-10 md:mt-0 max-w-xl">
        <h1 className="text-3xl font-medium leading-tight md:text-5xl md:leading-tight md:font-semibold lg:text-6xl lg:leading-[1.15]">
          {title}
        </h1>
        <p className='opacity-90 text-sm leading-relaxed font-light py-4 pb-6 md:py-6 md:pb-10 md:text-base md:w-90 md:mx-auto lg:text-lg'>
          {description}
        </p>
        <a href="#pricing" className='px-7 py-3 font-medium bg-[#e7ebff] text-[#2245ff] rounded-full'>Contrata ahora</a>
      </header>
      <footer className='hero-img md:absolute md:top-0 md:right-0 md:translate-y-1/2 md:-z-10 w-full md:w-[62vw] h-[20rem] object-cover'>
        <Image src={heroImg} alt='Imagen de peliculas, series y canales de MagisTV' />
      </footer>
    </section>
  )
}

export default Hero
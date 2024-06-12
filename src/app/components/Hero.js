import Link from 'next/link'
import heroImg from '../../../public/hero-magistv.png'
import Image from 'next/image'

const getStrapiData = async (path) => {
  const baseUrl = "http://localhost:1337"
  try {
    const res = await fetch(baseUrl + path)
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
    <section className='2xl:container 2xl:m-auto relative min-h-screen flex justify-around md:justify-between items-center flex-col md:flex-row p-5 lg:px-8 text-white text-balance text-center md:text-start'>
      <header className="mt-10 md:mt-0 max-w-xl">
        <h1 className="text-3xl font-medium leading-tight md:text-5xl md:leading-tight md:font-semibold lg:text-6xl lg:leading-[1.15]">
          {title}
        </h1>
        <p className='opacity-90 text-sm leading-relaxed font-light py-4 pb-6 md:py-6 md:pb-10 md:text-base md:w-90 md:mx-auto lg:text-lg'>
          {description}
        </p>
        <Link href="#" className='px-7 py-3 font-medium bg-[#e7ebff] text-[#2245ff] rounded-full'>Prueba gratuita</Link>
      </header>
      <footer className='2xl:container md:absolute md:right-8 md:-z-10 w-full md:w-[50vw] md:max-w-[55rem] h-[15rem] md:h-[30rem] mt-0 md:mt-40 lg:mt-20 object-cover'>
        <Image src={heroImg} alt='Imagen de peliculas, series y canales de MagisTV' />
      </footer>
    </section>
  )
}

export default Hero
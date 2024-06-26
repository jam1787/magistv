import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className='flex flex-col gap-2 justify-center items-center min-h-screen text-white'>
        <span className='text-9xl mb-6'>🎉</span>
        <h1 className='text-2xl'>Pago realizado con exito</h1>
        <p>Gracias por su compra</p>
        <Link href='/dashboard' className='text-blue-200 underline hover:opacity-90'>Ir al panel de control</Link>
    </section>
  )
}

export default page
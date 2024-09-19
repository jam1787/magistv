import Link from 'next/link'

export const ConfirmationError = () => {
  return (
    <p className='text-sm'>
      Parece que todavía no has confirmado tu correo electronico. Verifica en
      tu correo si tienes un correo de confirmación. ¿No lo encuentras?{' '}
      <Link
        href='https://wa.link/71fjq4'
        target='_blank'
        rel="noopener noreferrer"
        className='underline'
      >
        Envianos un mensaje
      </Link>
      .
    </p>
  )
}

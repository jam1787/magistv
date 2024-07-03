import Link from 'next/link'

export const ConfirmationError = () => {
    return (
      <p className='text-balance text-red-500 text-sm mt-3'>
        Parece que todavía no has confirmado tu correo electronico. Verifica en 
        tu correo si tienes un correo de confirmación. ¿No lo encuentras?{' '}
        <Link href='/confirmation/newrequest' className='underline'>
          Reenviar el correo de confirmación
        </Link>
        .
      </p>
    )
  }
  
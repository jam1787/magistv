import Link from "next/link"

const ConfirmationMessage = () => {
    return (
        <section className='px-4 py-8 mb-8 max-w-2xl text-ballance'>
            <h1 className='text-3xl font-semibold mb-4'>Por favor confirme su correo electronico.</h1>
            <p className='text-sm opacity-85'>
                Le enviamos un correo electronico con un enlace de confirmación.
                Por favor, abra ese correo y haga click en el enlace para confirmar
                su cuenta de MagisTV.
            </p>
            <h3 className='my-3'>¿No encuentras el correo electronico?</h3>
            <p className='text-sm opacity-85'>
                Si no recibiste un correo electronico con un enlace de confirmación, 
                por favor verifica tu carpeta de spam o espera un par de minutos.
            </p>
            <p className='mt-2 text-sm'>
                ¿El correo aún no llega?{' '}
                <Link href='/confirmation/newrequest' className='underline text-xs'>
                    Solicitar un nuevo correo de confirmación
                </Link>
                .
            </p>
        </section>
    )
}

export default ConfirmationMessage
import Link from 'next/link'

export const Form = ({
    title, 
    btnSubmitText, 
    forgotPassword,
    otherFormText,
    otherFormQuestion,
    otherFormLink
}) => {
  return (
    <div className="w-screen max-w-72 p-2 rounded-lg">
        <h1 className="text-3xl font-semibold capitalize">{title}</h1>
        <p className='text-sm opacity-85 mt-1'>Ingresa tus datos para {title === "Iniciar Sesión" ? 'iniciar sesión' : 'registrarte'}</p>
        <form className="mt-5">
            <div className="text-sm">
                <label className='block opacity-85 mb-2' htmlFor="email">Correo electronico</label>
                <input
                    className='w-full py-3 px-4 bg-transparent rounded-md border border-slate-400 outline-0'
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Escribe tu correo" 
                    required
                />
            </div>
            <div className="mt-3 text-sm">
                <label htmlFor="password" className='block opacity-85 mb-2'>Contraseña</label>
                <input
                    className='w-full py-3 px-4 bg-transparent rounded-md border border-slate-400 outline-0'
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Escribe tu contraseña" 
                    required
                />
                {forgotPassword &&
                    <Link className='block text-sm mt-3 text-end' href="#">
                        {forgotPassword}
                    </Link>
                }
            </div>
            <button 
                className="w-full my-5 py-2 px-5 font-medium bg-[#e7ebff] text-[#2245ff] rounded-md" 
                type='submit'
            >
                {btnSubmitText}
            </button>
        </form>
        <span className="flex justify-between text-sm font-light">
            {otherFormQuestion}
            <Link href={otherFormLink} className="font-medium">
                {otherFormText}
            </Link>
        </span>
    </div>
  )
}


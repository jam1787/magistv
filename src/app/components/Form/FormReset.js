"use client"
import { useFormState } from 'react-dom'
import { ZodErrors } from './ZodErrors'
import { StrapiErrors } from './StrapiErrors'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SubmitButton } from '../SubmitButton'

const FormReset = ({ title, description, btnSubmitText, userAction, code }) => {
    const INITIAL_STATE = {
        data: null,
        error: false,
        message: null,
        zodErrors: null,
        code: code || '',
    }
    const [formState, formAction] = useFormState(userAction, INITIAL_STATE)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData(e.target)
        await formAction(formData)
    }

    useEffect(() => {
        if (formState?.zodErrors || formState.message)
            setIsLoading(false)

    }, [formState?.zodErrors, formState])

    if (!code) return <p>Error, por favor use el enlace que le enviamos</p>
    if (!formState.error && 'message' in formState && formState.message === 'Success')
        return (
            <>
                <h2 className='m-4'>Tu contraseña fue reestablecida</h2>
                <p className='m-4'>
                    Tu contraseña fue reestablecida. Ahora ya puedes{' '}
                    <Link href='/sign-in' className='underline'>
                        Iniciar sesión
                    </Link>{' '}
                    con tu nueva contraseña.
                </p>
            </>
        )

    return (
        <div className="w-screen max-w-72 p-2 rounded-lg">
            <h1 className="text-3xl font-semibold capitalize">{title}</h1>
            <p className='text-sm opacity-85 mt-3'>{description}</p>
            <form className="mt-5" onSubmit={handleSubmit}>
                <div className="mt-3 text-sm">
                    <label htmlFor="password" className='block opacity-85 mb-2'>Contraseña *</label>
                    <input
                        className='w-full py-3 px-4 bg-transparent rounded-md border border-slate-400 outline-0'
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Escribe tu nueva contraseña"
                        autoComplete='new-password'
                        required
                    />
                    <ZodErrors error={formState?.zodErrors?.password} />
                </div>
                <div className="mt-3 text-sm">
                    <label htmlFor="password" className='block opacity-85 mb-2'>Confirmar contraseña *</label>
                    <input
                        className='w-full py-3 px-4 bg-transparent rounded-md border border-slate-400 outline-0'
                        type="password"
                        name="passwordConfirmation"
                        id="passwordConfirmation"
                        placeholder="Vuelve a escribir tu contraseña"
                        autoComplete='new-password'
                        required
                    />
                    <ZodErrors error={formState?.zodErrors?.passwordConfirmation} />
                </div>
                <SubmitButton
                    btnSubmitText={btnSubmitText}
                    isLoading={isLoading}
                />
            </form>
            <StrapiErrors error={formState?.message ? formState : null} />
        </div>
    )
}

export default FormReset
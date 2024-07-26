"use client"
import Link from 'next/link'
import { useFormState } from 'react-dom'
import { ZodErrors } from './ZodErrors'
import { StrapiErrors } from './StrapiErrors'
import { useEffect, useState } from 'react'

const INITIAL_STATE = {
    data: null,
    strapiErrors: null,
    zodErrors: null,
    message: null
}

export const Form = ({
    title,
    description,
    btnSubmitText,
    forgotPassword,
    otherFormText,
    otherFormQuestion,
    otherFormLink,
    userAction
}) => {
    const [formState, formAction] = useFormState(userAction, INITIAL_STATE)
    const [recaptchaToken, setRecaptchaToken] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!recaptchaToken) {
            alert('Por favor, complete el reCAPTCHA.')
            return
        }
        const formData = new FormData(e.target)
        formData.append('recaptchaToken', recaptchaToken)
        await formAction(formData)
    }

    useEffect(() => {
        const loadRecaptcha = () => {
            const script = document.createElement('script')
            script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`
            script.async = true
            script.onload = () => {
                window.grecaptcha.ready(() => {
                    window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_KEY, { action: 'submit' }).then((token) => {
                        setRecaptchaToken(token);
                    })
                })
            }
            document.body.appendChild(script)
        }

        if (!window.grecaptcha)
            loadRecaptcha()
        else {
            window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_KEY, { action: 'submit' }).then((token) =>
                setRecaptchaToken(token)
            )
        }
    }, [])

    return (
        <div className="w-screen max-w-72 p-2 rounded-lg">
            <h1 className="text-3xl font-semibold capitalize">{title}</h1>
            <p className='text-sm opacity-85 mt-1'>{description}</p>
            <form className="mt-5" onSubmit={handleSubmit}>
                {!forgotPassword
                    ?
                    <>
                        <div className="text-sm">
                            <label className='block opacity-85 mb-2' htmlFor="username">Usuario *</label>
                            <input
                                className='w-full py-3 px-4 bg-transparent rounded-md border border-slate-400 outline-0'
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Escribe un nombre de usuario"
                                required
                            />
                            <ZodErrors error={formState?.zodErrors?.username} />
                        </div>
                        <div className="mt-3 text-sm">
                            <label className='block opacity-85 mb-2' htmlFor="email">Correo electronico *</label>
                            <input
                                className='w-full py-3 px-4 bg-transparent rounded-md border border-slate-400 outline-0'
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Escribe tu correo"
                                required
                            />
                            <ZodErrors error={formState?.zodErrors?.email} />
                        </div>
                    </>

                    : <div className="text-sm">
                        <label className='block opacity-85 mb-2' htmlFor="identifier">Correo o usuario *</label>
                        <input
                            className='w-full py-3 px-4 bg-transparent rounded-md border border-slate-400 outline-0'
                            type="text"
                            name="identifier"
                            id="identifier"
                            placeholder="Escribe tu usuario o correo"
                            required
                        />
                        <ZodErrors error={formState?.zodErrors?.identifier} />
                    </div>
                }
                <div className="mt-3 text-sm">
                    <label htmlFor="password" className='block opacity-85 mb-2'>Contraseña *</label>
                    <input
                        className='w-full py-3 px-4 bg-transparent rounded-md border border-slate-400 outline-0'
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Escribe tu contraseña"
                    />
                    <ZodErrors error={formState?.zodErrors?.password} />
                    {forgotPassword &&
                        <Link href='/request-password' className='block text-sm mt-3 text-end'>
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
            {otherFormQuestion &&
                <span className="flex justify-between text-sm font-light">
                    {otherFormQuestion}
                    <Link href={otherFormLink} className="font-medium">
                        {otherFormText}
                    </Link>
                </span>
            }
            <StrapiErrors error={formState?.strapiErrors} />
        </div>
    )
}
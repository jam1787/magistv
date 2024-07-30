"use client"
import { useFormState } from 'react-dom'
import { ZodErrors } from './ZodErrors'
import { StrapiErrors } from './StrapiErrors'
import { SubmitButton } from '../SubmitButton'
import { useEffect, useState } from 'react'

const INITIAL_STATE = {
    data: null,
    strapiErrors: null,
    zodErrors: null,
    message: null
}

const FormRequest = ({
    title,
    description,
    btnSubmitText,
    onSendTitle,
    onSendDesc,
    userAction
}) => {
    const [formState, formAction] = useFormState(userAction, INITIAL_STATE)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData(e.target)
        await formAction(formData)
    }

    useEffect(() => {
        if (formState?.zodErrors || formState?.strapiErrors)
            setIsLoading(false)

    }, [formState?.zodErrors, formState?.strapiErrors])

    if (formState.message === 'Success')
        return (
            <>
                <h1 className='font-semibold text-2xl m-4'>{onSendTitle}</h1>
                <p className='text-center m-4 max-w-96'>{onSendDesc}</p>
            </>
        )

    return (
        <div className="w-screen max-w-80 p-2 rounded-lg">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className='text-sm opacity-85 mt-3'>{description}</p>
            <form className="mt-5" onSubmit={handleSubmit}>
                <div className="mt-3 text-sm">
                    <label className='block opacity-85 mb-2' htmlFor="email">Correo electronico *</label>
                    <input
                        className='w-full py-3 px-4 bg-transparent rounded-md border border-slate-400 outline-0'
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Escribe tu correo"
                        required
                    />
                    <ZodErrors error={formState?.zodErrors?.email} />
                </div>
                <SubmitButton
                    btnSubmitText={btnSubmitText}
                    isLoading={isLoading}
                />
            </form>
            <StrapiErrors error={formState?.strapiErrors} />
        </div>
    )
}

export default FormRequest
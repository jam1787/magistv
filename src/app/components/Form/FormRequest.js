"use client"
import { useFormState } from 'react-dom'
import { ZodErrors } from './ZodErrors'
import { StrapiErrors } from './StrapiErrors'

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
            <form className="mt-5" action={formAction}>
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
                <button
                    className="w-full my-5 py-2 px-5 font-medium bg-[#e7ebff] text-[#2245ff] rounded-md"
                    type='submit'
                >
                    {btnSubmitText}
                </button>
            </form>
            <StrapiErrors error={formState?.strapiErrors} />
        </div>
    )
}

export default FormRequest
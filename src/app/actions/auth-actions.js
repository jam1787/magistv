"use server"
import {z} from 'zod'

const schemaRegister = z.object({
    email: z.string().email({
        message: "Por favor ingrese una dirección de correo válida."
    }),
    password: z.string().min(6, {
        message: "La contraseña debe ser mayor a 6 caracteres."
    })
    .max(50, {
        message: "La contraseña debe ser menor a 50 caracteres."
    }),
})

export async function registerUserAction(prevState, FormData) {
    const validatedFields = schemaRegister.safeParse({
        email: FormData.get('email'),
        password: FormData.get('password')
    })

    if(!validatedFields.success) {
        return {
            ...prevState,
            zodErrors: validatedFields.error.flatten().fieldErrors,
            strapiErrors: null,
            message: "Missing Fields. Failed to Register"
        }
    }

    return {
        ...prevState,
        data: 'ok'
    }
}
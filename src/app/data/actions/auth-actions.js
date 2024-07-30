"use server"
import { z } from 'zod'
import { cookies } from 'next/headers'
import {
  registerUserService,
  loginUserService,
  passwordRequestService
} from '../services/auth-service'
import { redirect } from 'next/navigation'

const config = {
  maxAge: 60 * 60 * 24 * 7,
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
}

const schemaRegister = z.object({
  username: z.string().min(3, {
    message: "El nombre de usuario debe ser mayor a 3 caracarteres."
  }).max(25, {
    message: "El nombre de usuario debe ser menor a 25 caracarteres."
  }),

  email: z.string().email({
    message: "Por favor ingrese una dirección de correo válida."
  }),

  password: z.string().min(6, {
    message: "La contraseña debe ser mayor a 6 caracteres."
  }).max(70, {
    message: "La contraseña debe ser menor a 70 caracteres."
  }),
})

export async function registerUserAction(prevState, FormData) {
  const validatedFields = schemaRegister.safeParse({
    username: FormData.get('username'),
    email: FormData.get('email'),
    password: FormData.get('password')
  })

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      message: "Ocurrió un error, por favor verifique los campos."
    }
  }

  const recaptchaToken = FormData.get('recaptchaToken');
  const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: recaptchaToken
    })
  }).then(res => res.json())

  if (!recaptchaResponse.success) {
    return {
      ...prevState,
      zodErrors: null,
      strapiErrors: null,
      message: "La validación de reCAPTCHA falló. Por favor, intente nuevamente."
    }
  }

  const responseData = await registerUserService(validatedFields.data)

  if (!responseData) {
    return {
      ...prevState,
      zodErrors: null,
      strapiErrors: null,
      message: "Ups! Algo salio mal. Por favor intente de nuevo."
    }
  }

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Error al registrarse.",
    }
  }

  cookies().set("jwt", responseData.jwt, config)
  redirect("/confirmation/message")
}

const schemaLogin = z.object({
  identifier: z
    .string()
    .min(3, {
      message: "El identificador debe ser de al menos 3 caracteres.",
    }),
  password: z
    .string()
    .min(6, {
      message: "La contraseña debe ser de al menos 6 caracteres.",
    })
    .max(50, {
      message: "La contraseña debe ser entre 6 y 50 caracteres.",
    }),
})

export async function loginUserAction(prevState, formData) {
  const validatedFields = schemaLogin.safeParse({
    identifier: formData.get("identifier"),
    password: formData.get("password"),
  })

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Ocurrió un error, por favor verifique los campos.",
    }
  }

  const recaptchaToken = formData.get('recaptchaToken');
  const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: recaptchaToken
    })
  }).then(res => res.json())

  if (!recaptchaResponse.success) {
    return {
      ...prevState,
      zodErrors: null,
      strapiErrors: null,
      message: "La validación de reCAPTCHA falló. Por favor, intente nuevamente."
    }
  }

  const responseData = await loginUserService(validatedFields.data)

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Ups! Algo salio mal. Por favor intente de nuevo.",
    }
  }

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Error al iniciar sesión.",
    }
  }

  cookies().set("jwt", responseData.jwt, config)
  redirect("/dashboard")
}

export async function logoutAction() {
  cookies().set("jwt", "", { ...config, maxAge: 0 })
  redirect("/")
}

const schemaPasswordRequest = z.object({
  email: z.string().email({
    message: "Por favor ingrese una dirección de correo válida."
  }),
})

export async function passwordRequestAction(prevState, formData) {
  const validatedFields = schemaPasswordRequest.safeParse({
    email: formData.get("email")
  })

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Ocurrio un error, por favor verifique el campo de correo electronico.",
    }
  }

  const responseData = await passwordRequestService(validatedFields.data);

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Ups! Algo salio mal. Por favor intente de nuevo.",
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Error al enviar la solicitud de recuperar contraseña.",
    }
  }
  return { message: 'Success' }
}

const schemaPasswordReset = z.object({
  password: z.string().min(6, {
    message: "La contraseña debe ser mayor a 6 caracteres."
  }).max(50, {
    message: "La contraseña debe ser menor a 50 caracteres."
  }),
  passwordConfirmation: z.string().min(6, {
    message: "La contraseña debe ser mayor a 6 caracteres."
  }).max(50, {
    message: "La contraseña debe ser menor a 50 caracteres."
  })
})

export async function passwordResetAction(prevState, formData) {
  const validatedFields = schemaPasswordReset.safeParse({
    password: formData.get("password"),
    passwordConfirmation: formData.get("passwordConfirmation")
  })

  if (!validatedFields.success) {
    return {
      error: false,
      message: "",
      zodErrors: validatedFields.error.flatten().fieldErrors,
      code: prevState.code
    }
  }

  const { password, passwordConfirmation } = validatedFields.data

  try {
    const strapiResponse = await fetch(
      process.env.STRAPI_URL + '/api/auth/reset-password',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password,
          passwordConfirmation,
          code: prevState.code,
        }),
        cache: 'no-cache',
      }
    )
    if (!strapiResponse.ok) {
      return {
        error: true,
        message: "Por favor verifique que las contraseñas sean iguales",
        code: prevState.code
      }
    }

    return { error: false, message: 'Success' }

  } catch (error) {
    return {
      error: true,
      message: 'message' in error ? error.message : error.statusText,
      code: prevState.code,
    };
  }
}
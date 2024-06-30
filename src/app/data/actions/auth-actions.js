"use server"
import { z } from 'zod'
import { cookies } from 'next/headers'
import { registerUserService, loginUserService } from '../services/auth-service'
import { redirect } from 'next/navigation'

const config = {
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
}

const schemaRegister = z.object({
  username: z.string().min(3, {
    message: "El nombre de usuario debe ser mayor a 3 caracarteres."
  }).max(20, {
    message: "El nombre de usuario debe ser menor a 20 caracarteres."
  }),

  email: z.string().email({
    message: "Por favor ingrese una dirección de correo válida."
  }),

  password: z.string().min(6, {
    message: "La contraseña debe ser mayor a 6 caracteres."
  }).max(50, {
    message: "La contraseña debe ser menor a 50 caracteres."
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
      message: "Missing Fields. Failed to Register"
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

  cookies().set("jwt", responseData.jwt, config);
  redirect("/pricing");
}

const schemaLogin = z.object({
  identifier: z
    .string()
    .min(3, {
      message: "El identificador debe ser de al menos 3 caracteres",
    })
    .max(20, {
      message: "Por favor ingrese un nombre de usuario o correo valido",
    }),
  password: z
    .string()
    .min(6, {
      message: "La contraseña debe ser de al menos 6 caracteres",
    })
    .max(50, {
      message: "La contraseña debe ser entre 6 y 50 caracteres.",
    }),
});

export async function loginUserAction(prevState, formData) {
  const validatedFields = schemaLogin.safeParse({
    identifier: formData.get("identifier"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Login.",
    };
  }

  const responseData = await loginUserService(validatedFields.data);

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
      message: "Error al iniciar sesión.",
    };
  }

  cookies().set("jwt", responseData.jwt, config);
  redirect("/pricing");
}

export async function logoutAction() {
  cookies().set("jwt", "", { ...config, maxAge: 0 });
  redirect("/");
}
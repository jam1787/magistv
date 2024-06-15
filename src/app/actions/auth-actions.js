"use server"

export async function registerUserAction(prevState, FormData) {
    console.log("hello from register")

    const fields = {
        email: FormData.get('email'),
        password: FormData.get('password')
    }

    return {
        ...prevState,
        data: 'ok'
    }
}
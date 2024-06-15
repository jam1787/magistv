import { Form } from '@/app/components/Form/Form'

const SignIn = () => {
  return (
    <Form 
        title='Iniciar Sesión' 
        btnSubmitText='Ingresar' 
        forgotPassword='¿Olvidaste tu contraseña?'
        otherFormQuestion='¿No tienes una cuenta?'
        otherFormText='Registrate'
        otherFormLink='/create-account'
    />
  )
}

export default SignIn
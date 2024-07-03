import { Form } from '@/app/components/Form/Form'
import { loginUserAction } from "@/app/data/actions/auth-actions"

const SignIn = () => {
  return (
    <Form
      title='Iniciar Sesión'
      btnSubmitText='Ingresar'
      forgotPassword='¿Olvidaste tu contraseña?'
      otherFormQuestion='¿No tienes una cuenta?'
      otherFormText='Registrate'
      otherFormLink='/create-account'
      userAction={loginUserAction}
    />
  )
}

export default SignIn
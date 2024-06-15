import { Form } from '@/app/components/Form/Form'

const CreateAccount = () => {
  return (
    <Form 
        title='registrate' 
        btnSubmitText='Registrarme'
        otherFormQuestion='¿Ya tienes una cuenta?'
        otherFormText='Iniciar Sesión'
        otherFormLink='/sign-in'
    />
  )
}

export default CreateAccount
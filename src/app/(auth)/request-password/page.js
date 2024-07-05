import FormRequest from '@/app/components/Form/FormRequest'
import { passwordRequestAction } from '@/app/data/actions/auth-actions'

export default async function RequestResetPage() {
    return (
        <FormRequest
            title='Solicitud para cambiar contraseña'
            description='Ingresa tu correo electronico y le enviaremos un enlace 
            que podra utilizar para recuperar su contraseña.'
            onSendTitle='Verifica tu correo electronico'
            onSendDesc='Te enviamos un correo electronico con un enlace. 
            Abre ese enlace para recuperar tu contraseña.'
            btnSubmitText='Enviar solicitud'
            userAction={passwordRequestAction}
        />
    )
}
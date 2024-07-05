import FormReset from "@/app/components/Form/FormReset"
import { passwordResetAction } from "@/app/data/actions/auth-actions"

const ResetPasword = ({ searchParams }) => {
    const code = searchParams?.code
    return (
        <FormReset
            title='recuperar contraseña'
            description='Ingrese su nueva contraseña y luego vuelva a escribirle'
            btnSubmitText='Cambiar Contraseña'
            userAction={passwordResetAction}
            code={code}
        />
    )
}

export default ResetPasword
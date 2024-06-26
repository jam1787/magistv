import { getUserMeLoader } from "../data/services/get-user-me-loader"
import LogoutButton from "../utils/LogoutButton"
import WhatsAppButton from "../utils/WhatsAppButton"

const DashboardRoute = async () => {
  const user = await getUserMeLoader()
  const { username } = user.data

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-2xl">Bienvenido <span className="font-semibold">{username}</span></h1>
      <LogoutButton data='Cerrar sesión' />
        <h2 className="mt-10 mb-4 text-2xl font-medium max-w-72 text-balance text-center">¿Necesitas reportar un pago?</h2>
        <p>Datos que debes enviarnos:</p>
        <ul className="mt-4  mx-0 px-0">
          <li>Banco</li>
          <li>Nmro. de cuenta</li>
          <li>Nombre del titular</li>
          <li>Correo</li>
        </ul>
        <WhatsAppButton
          reference={null}
          route='https://wa.link/azhgbi'
          data='Chatea con nosotros'
          classStyle="px-3 py-4 mt-10 bg-[#00CC5D] rounded flex gap-2 items-center text-2xl"
        />
    </section>
  )
}

export default DashboardRoute
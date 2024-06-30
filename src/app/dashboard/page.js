import { getUserMeLoader } from "../data/services/get-user-me-loader"
import LogoutButton from "../utils/LogoutButton"
import WhatsAppButton from "../utils/WhatsAppButton"

const DashboardRoute = async () => {
  const user = await getUserMeLoader()
  const { username } = user.data

  return (
    <section className="flex flex-col items-center justify-evenly min-h-screen text-white">
      <div className="">
        <h1 className="text-2xl">Bienvenido <span className="font-semibold">{username}</span></h1>
        <LogoutButton data='Cerrar sesión' />
      </div>
      <div className="max-w-56">
        <h2 className="mt-8 mb-4 text-2xl font-medium max-w-72 text-balance text-center">¿Necesitas reportar un pago?</h2>
        <WhatsAppButton
          reference={null}
          route='https://wa.link/azhgbi'
          data='Chatea con nosotros'
          classStyle="flex gap-3 justify-center items-center text-2xl px-3 py-4 mt-4 bg-[#00CC5D] rounded"
        />
      </div>
    </section>
  )
}

export default DashboardRoute
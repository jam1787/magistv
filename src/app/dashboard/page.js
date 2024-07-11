import { getUserMeLoader } from "../data/services/get-user-me-loader"
import LogoutButton from "../utils/LogoutButton"
import WhatsAppButton from "../utils/WhatsAppButton"
import { MdLogout } from "react-icons/md"
import { OrdersTable } from "./OrdersTable"

const DashboardRoute = async () => {
  const user = await getUserMeLoader()
  const { username, email } = user.data

  return (
    <section className="2xl:container flex flex-col m-auto px-4 md:px-8 text-white">
      <div className="flex flex-col md:flex-row gap-4 items-center mt-28 mb-12">
        <h1 className="text-2xl md:text-4xl text-slate-200">Bienvenido/a <span className="font-semibold capitalize">{username}</span></h1>
        <LogoutButton
          data={<MdLogout className="text-2xl" />}
          text='Cerrar sesión'
        />
      </div>
      <h2 className="mb-3 text-lg font-semibold">Tus ordenes de compra:</h2>
      <OrdersTable email={email}/>
      <div className="sm:flex gap-4 items-center mt-28">
        <h2 className="mb-8 sm:mb-0 text-xl font-medium text-balance text-center sm:text-start">¿Necesitas reportar un pago?</h2>
        <WhatsAppButton
          route='https://wa.link/azhgbi'
          data='Chatea con nosotros'
          classStyle="flex gap-3 justify-center items-center text-2xl px-3 py-4 bg-[#00CC5D] rounded"
        />
      </div>
    </section>
  )
}

export default DashboardRoute
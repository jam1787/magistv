import { getUserMeLoader } from "../data/services/get-user-me-loader"
import LogoutButton from "../utils/LogoutButton"
import WhatsAppButton from "../utils/WhatsAppButton"
import { MdLogout } from "react-icons/md"
import { OrdersTable } from "./OrdersTable"
import { getOrdersData } from "../data/services/get-orders"
import { DownloadLink } from "../utils/downloadLink"

const DashboardRoute = async () => {
  const user = await getUserMeLoader()
  const { username, email } = user.data
  const orders = await getOrdersData(`/api/orders?filters[email][$eq]=${email}`)
  const userFirstLetter = username.charAt(0).toUpperCase();

  return (
    <section className="2xl:container flex flex-col lg:flex-row justify-between m-auto px-4 md:px-8 text-white">
      <div className="flex flex-col gap-3 mt-32 mb-12">
        <span className='flex justify-center items-center bg-red-400 w-16 h-16 rounded-full text-3xl'>{userFirstLetter}</span>
        <h1 className="text-2xl md:text-4xl text-slate-200">Bienvenido/a <span className="font-semibold capitalize">{username}</span></h1>
        <LogoutButton
          data={<MdLogout className="text-2xl" />}
          text='Cerrar sesión'
        />
        <DownloadLink 
          classN="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 max-w-52 text-center transition rounded-2xl"
          route="https://www.magis-tv.cc/apps/magis-celular.apk?0708"
          text="Descargar para celulares"
        />
        <DownloadLink 
          classN="px-4 py-2 text-sm border border-blue-600 hover:bg-blue-600 max-w-52 text-center transition rounded-2xl"
          route="https://www.magis-tv.dev/apps/magis-tv-video.apk"
          text="Descargar para TV"
        />
      </div>
      <div className="mt-10 lg:mt-56">
        <p className="mb-10 text-2xl font-semibold">Correo: {email}</p>
        <h2 className="mb-3 text-lg font-semibold">Tus ordenes de compra:</h2>
        <OrdersTable orders={orders} />
        <div className="sm:flex gap-4 items-center mt-6">
          <h2 className="mb-8 sm:mb-0 text-xl font-medium text-balance text-center sm:text-start">¿Necesitas reportar un pago?</h2>
          <WhatsAppButton
            route='https://wa.link/c6kr07'
            data='Chatea con nosotros'
            classStyle="flex gap-3 justify-center items-center text-2xl px-3 py-4 bg-[#00CC5D] rounded"
          />
        </div>
      </div>
    </section>
  )
}

export default DashboardRoute
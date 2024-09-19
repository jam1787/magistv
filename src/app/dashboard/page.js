import { getUserMeLoader } from "../data/services/get-user-me-loader"
import LogoutButton from "../utils/LogoutButton"
import WhatsAppButton from "../utils/WhatsAppButton"
import { MdLogout } from "react-icons/md"
import { OrdersTable } from "./OrdersTable"
import { getOrdersData } from "../data/services/get-orders"
import { DownloadLink } from "../utils/downloadLink"
import { LastOrder } from "./LastOrder"

const DashboardRoute = async () => {
  const user = await getUserMeLoader()
  const { username, email, usermagistv, passwordmagistv } = user.data
  const orders = await getOrdersData(`/api/orders?filters[email][$eq]=${email}`)
  const userFirstLetter = username.charAt(0).toUpperCase();

  return (
    <section className="2xl:container flex flex-col lg:flex-row lg:gap-32 m-auto px-4 md:px-8 text-white overflow-hidden">
      <div className="flex flex-col gap-3 mt-28 mb-20">
        <span className='flex justify-center items-center bg-red-400 w-16 h-16 rounded-full text-3xl'>{userFirstLetter}</span>
        <h1 className="text-2xl md:text-4xl text-slate-200">Bienvenido/a <span className="font-semibold capitalize">{username}</span></h1>
        <LogoutButton
          data={<MdLogout className="text-2xl" />}
          text='Cerrar sesión'
        />
        <DownloadLink
          classN="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 max-w-52 text-center transition rounded-2xl"
          route="/apps/magistv-celular.apk"
          text="Descargar para celulares"
        />
        <DownloadLink
          classN="px-4 py-2 text-sm border border-blue-600 hover:bg-blue-600 max-w-52 text-center transition rounded-2xl"
          route="/apps/magistv-video.apk"
          text="Descargar para TV"
        />
      </div>
      <div className="lg:mt-56">
        <h2 className="text-lg font-semibold">Accesos a tu cuenta de MagisTV:</h2>
        <div className="inline-block w-full my-3 py-8 px-4 border border-slate-500 rounded-md">
          <h3>Correo: <span className="text-lg font-semibold text-end">{usermagistv}</span></h3>
          <h3>Contraseña: <span className="text-lg font-semibold text-end">{passwordmagistv}</span></h3>
        </div>
        <h2 className="my-3 text-lg font-medium">Estado de tu suscripción:</h2>
        <div className="inline-block w-full py-6 px-4 border border-slate-500 rounded-md">
          <LastOrder orders={orders} email={email} />
        </div>
        <h2 className="mt-8 mb-3 text-lg font-medium">Tus ordenes de compra:</h2>
        <OrdersTable orders={orders} />
        <div className="sm:flex gap-4 items-center my-10">
          <h3 className="mb-8 sm:mb-0 text-xl font-medium text-balance text-center sm:text-start">¿Necesitas reportar un pago?</h3>
          <WhatsAppButton
            route='https://wa.link/c6kr07'
            data='Chatea con nosotros'
            classStyle="flex gap-3 justify-center text-lg items-center px-4 py-4 bg-[#00CC5D] rounded"
          />
        </div>
      </div>
    </section>
  )
}

export default DashboardRoute
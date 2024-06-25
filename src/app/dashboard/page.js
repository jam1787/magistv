import { getUserMeLoader } from "../data/services/get-user-me-loader"
import LogoutButton from "../utils/LogoutButton"

const DashboardRoute = async () => {
  const user = await getUserMeLoader()
  const {username} = user.data

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-2xl">Bienvenido <span className="font-semibold">{username}</span></h1>
      <LogoutButton data='Cerrar sesión'/>
    </section>
  )
}

export default DashboardRoute
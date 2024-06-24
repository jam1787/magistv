import LogoutButton from "../utils/LogoutButton";

export default function DashboardRoute() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1>Dashboard</h1>
      <LogoutButton data='Cerrar sesión'/>
    </section>
  )
}
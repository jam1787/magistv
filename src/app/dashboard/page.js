import { logoutAction } from "@/app/data/actions/auth-actions";

export default function DashboardRoute() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1>Dashboard</h1>
      <form action={logoutAction}>
        <button type="submit" className="mt-5 py-3 px-8 border border-red-500 rounded-md hover:bg-red-700 transition">
          Cerrar sesión
        </button>
      </form>
    </section>
  )
}
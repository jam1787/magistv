import { logoutAction } from "../data/actions/auth-actions"

const LogoutButton = ({data}) => {
  return (    
    <form action={logoutAction}>
        <button 
            type="submit" 
            className="mt-5 py-3 px-8 border border-red-500 rounded-md hover:bg-red-700 transition">
            {data}
        </button>
    </form>
  )
}

export default LogoutButton
import { logoutAction } from "../data/actions/auth-actions"

const LogoutButton = ({data, text}) => {
  return (    
    <form action={logoutAction}>
        <button 
            type="submit" 
            className="flex gap-3 items-center text-base py-3 px-4 border border-red-500 rounded-md hover:bg-red-700 transition">
            {text}{data}
        </button>
    </form>
  )
}

export default LogoutButton
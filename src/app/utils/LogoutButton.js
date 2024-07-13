import { logoutAction } from "../data/actions/auth-actions"

const LogoutButton = ({data, text}) => {
  return (    
    <form action={logoutAction}>
        <button 
            type="submit" 
            className="flex gap-3 justify-center items-center text-base py-2.5 px-3 w-full mb-5 max-w-52 border border-red-600 rounded-md hover:bg-red-600 transition">
            {text}{data}
        </button>
    </form>
  )
}

export default LogoutButton
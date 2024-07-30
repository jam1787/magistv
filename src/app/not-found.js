import Link from "next/link"
import {PiWarningCircle} from 'react-icons/pi'
import LinkComponent from "./components/LinkComponent"

const NotFound = () => {
  return (
    <section className="">
    <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
            <p className="p-3 text-blue-500 rounded-full bg-gray-800">
                <PiWarningCircle className="w-6 h-6"/>
            </p>
            <h1 className="mt-5 text-2xl font-semibold text-white md:text-5xl">Página no encontrada</h1>
            <p className="mt-4 mb-6 text-gray-400 text-balance">Lo sentimos, la página que estabas buscando no existe.</p>
            <LinkComponent 
                route='/'
                text='Llevame al inicio'
                classStyle="px-6 py-2.5 text-sm text-white transition-colors duration-200 hover:bg-blue-600 bg-blue-700" 
            />
        </div>
    </div>
</section>
  )
}

export default NotFound
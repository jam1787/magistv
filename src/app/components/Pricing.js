import { getUserMeLoader } from "../data/services/get-user-me-loader"
import LinkComponent from "./LinkComponent"

const pricingData = [
  { plan: 'Básico', time: '1 mes', price: '9', description: 'Acceso completo a todos los contenidos de MagisTV durante 1 mes.' },
  { plan: 'Intermedio', time: '3 meses', price: '25', description: 'Acceso completo a todos los contenidos de MagisTV durante 3 mes.' },
  // {plan: 'Pro', time: '6 meses + 1 grátis', price: '49', description: 'Acceso completo al contenido de MagisTv durante 6 meses por un precio promocional. Además, 1 mes adicional sin costo.'},
  { plan: 'Premium', time: '12 meses + 2 grátis', price: '87', description: 'Acceso a MagisTV durante 12 meses Además, 2 meses adicionales sin costo.' },
]

const Pricing = async () => {
  const user = await getUserMeLoader()

  return (
    <section id="pricing">
      <h2 className="mx-auto text-3xl md:text-5xl font-semibold text-center mt-20 mb-6 md:mt-0 md:mb-20">Elige tu plan</h2>
      <div className="flex justify-center items-center flex-wrap text-center text-balance">
        {pricingData.map(({ plan, time, price, description }, i) =>
          <div key={i} className={`w-fit flex flex-col m-6 md:m-10 md:mx-6 ${i === 1 && 'w-fit bg-gradient-to-b from-[#0024d6] 60% to-[#0101301b] 100% p-1 md:-translate-y-4'}`}>
            <div className={`relative h-[18.5rem] md:h-80 flex flex-col justify-between px-2 py-5 md:px-4 max-w-72 ${i === 1 && 'afakhshha bg-gradient-to-b from-[#01043b] to-[#01013000] pt-8'}`}>
              {i === 1 && <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-sm bg-gradient-to-r from-[#5a73f0] to-[#002aff] py-1 px-3 rounded-full">Mas popular</span>}
              <div>
                <h2 className="text-2xl font-medium pb-2 border-b border-blue-600 opacity-85 uppercase">{plan}</h2>
                <h3 className="text-3xl py-3 font-semibold w-60 mx-auto opacity-85">USD {price}/<span className="text-2xl">{time}</span></h3>
                <p className=" text-sm max-w-1/2 opacity-85">{description}</p>
              </div>
              {user.ok 
                ? <LinkComponent text='PAGAR' route='pay' classStyle={`${i === 1 && 'link-popular-pricing text-white'} block py-3 px-10 w-full text-md transtion hover:opacity-85`} />
                : <LinkComponent text='CONTRATAR' route='sign-in' classStyle={`${i === 1 && 'link-popular-pricing text-white'} block py-3 px-10 w-full text-md transtion hover:opacity-85`} />
              }
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Pricing
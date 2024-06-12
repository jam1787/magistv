import LinkComponent from "./LinkComponent"

const pricingData = [
    {plan: 'Básico', time: '1 mes', price: '09', description: 'Acceso completo a todos los contenidos de MagisTV durante 1 mes.'},
    {plan: 'Intermedio', time: '3 meses', price: '25', description: 'Acceso completo a todos los contenidos de MagisTV durante 3 mes.'},
    {plan: 'Pro', time: '6 meses + 1 grátis', price: '49', description: 'Acceso completo al contenido de MagisTv durante 6 meses por un precio promocional. Además, 1 mes adicional sin costo.'},
    {plan: 'Premium', time: '12 meses + 2 grátis', price: '87', description: 'Acceso completo al contenidos de MagisTV durante 12 meses por un precio promocional. Además, 2 meses adicionales sin costo.'},
]

const Pricing = () => {
  return (
    <section className="flex justify-center items-center flex-wrap text-center text-white">
        {pricingData.map(({plan, time, price, description}) => 
          <div className="h-80 flex flex-col justify-between m-10 px-2 text-center py-5 max-w-72">
            <h2 className="text-2xl font-medium pb-2 border-b border-blue-600 opacity-85 uppercase">{plan}</h2>
            <h3 className="text-3xl py-3 font-semibold w-60 mx-auto opacity-85">USD {price}/<span className="text-2xl">{time}</span></h3>
            <p className="pb-8 text-sm max-w-1/2 opacity-85">{description}</p>
            <LinkComponent text='CONTRATAR' classStyle='block py-3 px-10 w-full text-md' />
          </div>
        )}
    </section>
  )
}

export default Pricing
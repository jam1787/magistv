import { Accordion } from "./Accordion/Accordion"

const faqsData = [
    {question: '¿Qué se puede ver en MagisTv?', answer: 'Se trata de una aplicación que ofrece acceso a más de 1.200 canales en vivo, 10.000 series y películas, eventos deportivos y más. Además, permite el acceso ilimitado a todas las plataformas, entre esas Star+, Hbo, Disney, por lo que los usuarios pueden ver los partidos de LigaPro y Muchos más sin ningún coste adicional.'},
    {question: '¿Qué tan seguro es la aplicación MagisTV?', answer: 'Siempre y cuando lo descarguen de los Links proporcionados por nosotros no representa ningún riesgo. Como todo en internet, tratando de replicar el éxito de Magis han salido copias maliciosas que introducen Publicidad en Tu teléfono abusando de los Permisos que le Puedan otorgar.'},
    {question: '¿Cuales son los dispositivos compatibles?', answer: 'Basicamente todo Dispositivos Android donde puedas instalar la aplicacion de Magis es compatible.', devices: true },
    {question: '¿Cuántos dispositivos puedo conectar al mismo tiempo?', answer: 'Podrás visualizar hasta 3 pantallas consecutivas nuestro servicio se vende en cuentas triples o para 3 dispositivos.'},
]

const allowDevices = [{
    tv: ['NVIDIA SHIELD TV (nuevo y antiguo)', 'Xiaomi Mi Box S (Android TV)', 'Xiaomi Mi Stick', 'Fire TV Stick Lite', 'Smart TVs con Android TV'],
    stream: ['Amazon Fire TV Stick', 'Chromecast'],
    mobile: ['Teléfonos inteligentes y tabletas con Android', 'iPhones y iPads (con un jailbreak)']
}]

export const Faqs = () => {
    return ( 
      <section className='mb-10'>
        <div className="max-w-2xl mx-auto text-center mt-16 mb-8 md:mb-20">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Preguntas frecuentes</h2>
        </div>
        <div className="p-2 w-[90%] mx-auto max-w-[50rem] rounded-lg">
          {faqsData.map(({question, answer, devices}, i) =>
            <Accordion
              key={i}
              question={question}
              answer={answer}
              allowDevices={allowDevices}
              devices={devices}
            />
          )}
        </div> 
      </section>
    )
  }
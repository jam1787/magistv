"use client"
import { useState } from 'react'
import { AccordionAnimation } from './AccordionAnimation'
import { DownloadLink } from '@/app/utils/downloadLink'

export const Accordion = ({ question, answer, allowDevices, devices, linkMobile, linkTV }) => {
    const [accordionOpen, setAccordionOpen] = useState(false)

    return (
        <div className='px-3 pt-5 pb-3 border-b cursor-pointer' onClick={() => setAccordionOpen(!accordionOpen)}>
            <button
                className='w-full text-start flex items-center justify-between gap-2'
            >
                <span className='text-pretty'>{question}</span>
                <AccordionAnimation accordionOpen={accordionOpen} />
            </button>
            <div className={`text-sm transition-all duration-300 py-1 h-0 overflow-hidden ${accordionOpen && 'h-fit py-2'
                }`}>
                <div className="pt-2 transition-all">
                    <p className='opacity-85 w-[90%] text-ballance'>{answer}</p>
                    {devices &&
                        allowDevices.map(({ tv, stream, mobile }, i) =>
                            <ul key={i} className='pt-4'>
                                <h3 className='my-2 text-base'>Smart TVs</h3>
                                {tv.map((tvs, i) =>
                                    <li key={i} className='pt-1.5 pl-3 opacity-85'>{tvs}</li>
                                )}
                                <h3 className='my-2 text-base'>Dispositivos de streaming</h3>
                                {stream.map((streams, i) =>
                                    <li key={i} className='pt-1.5 pl-3 opacity-85'>{streams}</li>
                                )}
                                <h3 className='my-2 text-base'>Dispositivos móviles</h3>
                                {mobile.map((mobiles, i) =>
                                    <li key={i} className='pt-1.5 pl-3 opacity-85'>{mobiles}</li>
                                )}
                            </ul>
                        )
                    }
                    {linkMobile
                        && <>
                            <DownloadLink
                                route={linkMobile}
                                classN='block mt-3 underline underline-offset-2'
                                text='Descargar para celulares'
                            />

                            <DownloadLink
                                route={linkTV}
                                classN='block mt-3 underline underline-offset-2'
                                text='Descargar para TV'
                            />
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
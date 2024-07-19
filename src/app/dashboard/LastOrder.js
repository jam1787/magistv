'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import LinkComponent from "../components/LinkComponent"
import WhatsAppButton from "../utils/WhatsAppButton"

export const LastOrder = ({ orders }) => {
    const [isSubscriptionActive, setIsSubscriptionActive] = useState()
    const [lastOrder, setLastOrder] = useState()

    if (!orders || orders.length === 0)
        return <>
            <p className="text-center">No tienes ninguna suscripción.</p>
            <div className="flex flex-col w-full md:flex-row justify-center md:gap-4  mt-3">
                <LinkComponent
                    text='Contrata ahora'
                    classStyle='inline-block text-center mt-3 py-2 px-10 bg-white'
                    route='pricing'
                />
                <WhatsAppButton
                    data='Obtener demo'
                    route='https://wa.link/9j8y75'
                    classStyle='flex gap-2 justify-center items-center text-white rounded-full mt-3 py-2 px-10 bg-[#8286ff]'
                />
            </div>
        </>

    useEffect(() => {
        const filterOrders = () => {
            if (orders.length > 0) {
                const sortedOrders = orders.sort((a, b) => new Date(b.paymentDate) - new Date(a.paymentDate))

                const latestOrder = sortedOrders[0]
                setLastOrder(latestOrder)

                const subscriptionEndDate = new Date(latestOrder.subscriptionEndDate)
                setIsSubscriptionActive(subscriptionEndDate > new Date())
            }
        }
        return filterOrders()
    }, [])

    return (
        <>
            {lastOrder &&
                <div className="my-3 text-center">
                    {isSubscriptionActive
                        ? <>
                            <h3 >
                                Tu plan:
                                <span className="pl-2 pt-2 text-4xl font-bold bg-gradient-to-b from-[#f890ff] from-[3%] via-[#9699ff] via-[55%] to-[#4edfff] to-[100%] text-transparent bg-clip-text">{lastOrder.plan}</span>
                            </h3>
                        </>
                        : <>
                            <h3 className="mt-1 mb-5 opacity-85">Tu suscripción ha vencido.</h3>
                            <LinkComponent
                                text='Renovar Suscripción'
                                route='pricing'
                                classStyle='py-3 px-10'
                            />
                        </>
                    }
                </div>
            }
        </>
    )
}

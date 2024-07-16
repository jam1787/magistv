'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import LinkComponent from "../components/LinkComponent"

export const LastOrder = ({ orders }) => {
    const [isSubscriptionActive, setIsSubscriptionActive] = useState()
    const [lastOrder, setLastOrder] = useState()

    if (!orders || orders.length === 0)
        return <>
            <p>No tienes ninguna suscripción.</p>
            <LinkComponent
                text='Contrata ahora'
                classStyle='mt-3 inline-block py-2 px-10 bg-gradient-to-b from-[#fff] from-[60%] via-[#8286ff] via-[100%]'
                route='pricing'
            />
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
                <div className="my-3">
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
                                classStyle='py-3 px-10 bg-gradient-to-b from-[#fff] from-[60%] via-[#8286ff] via-[100%]'
                            />
                        </>
                    }
                </div>
            }
        </>
    )
}

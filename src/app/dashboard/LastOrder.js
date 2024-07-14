'use client'
import Link from "next/link"
import { useEffect, useState } from "react"

export const LastOrder = ({ orders }) => {
    const [isSubscriptionActive, setIsSubscriptionActive] = useState()
    const [lastOrder, setLastOrder] = useState()

    useEffect(() => {
        if (orders.length > 0) {
            const sortedOrders = orders.sort((a, b) => new Date(b.paymentDate) - new Date(a.paymentDate))

            const latestOrder = sortedOrders[0]
            setLastOrder(latestOrder)

            const subscriptionEndDate = new Date(latestOrder.subscriptionEndDate)
            setIsSubscriptionActive(subscriptionEndDate > new Date())
        }
    }, [])

    return (
        <>
            {lastOrder &&
                <div className="mb-2">
                    {isSubscriptionActive
                        ? <>
                            <h3>Tu plan:</h3>
                            <span>{lastOrder.plan}</span>
                        </>
                        : <>
                            <h3>Tu suscripción ha vencido.</h3>
                            <Link href='/pricing'>Renovar</Link>
                        </>
                    }
                </div>
            }
        </>
    )
}

'use client'
import { useEffect, useState } from "react"

export const OrdersTable = ({ orders }) => {
    const [order, setOrder] = useState([])

    useEffect(() => {
        const sortedOrders = orders.sort((a, b) => new Date(b.paymentDate) - new Date(a.paymentDate))
        setOrder(sortedOrders)
    }, [])

    if(!order || order.length === 0) 
        return <p>No se encontraron ordenes registradas.</p>

    return (
        <div className="overflow-auto w-full max-h-screen rounded-lg border border-gray-400 ">
            <table className="w-full border-collapse text-left text-sm text-white">
                <thead className="text-center">
                    <tr>
                        <th scope="col" className="p-4 md:p-6 font-medium">Plan</th>
                        <th scope="col" className="p-4 md:p-6 font-medium">Estado</th>
                        <th scope="col" className="p-4 md:p-6 font-medium">Precio</th>
                        <th scope="col" className="p-4 md:p-6 font-medium">Fecha de pago</th>
                        <th scope="col" className="p-4 md:p-6 font-medium">Fecha de finalización</th>
                        <th scope="col" className="p-4 md:p-6 font-medium">Identificador</th>
                    </tr>
                </thead>
                {order.map(({ status, plan, amount, paymentDate, subscriptionEndDate, paymentID }, i) => {
                    return (
                        <tbody key={i} className="divide-y divide-gray-200 border-t border-gray-400 text-center">
                            <tr>
                                <th className="p-4 font-medium">{plan}</th>
                                <td className="p-4">
                                    <span
                                        className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-600"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                        {status === 'paid' && 'Pagado'}
                                    </span>
                                </td>
                                <td className="p-4">USD {amount}</td>
                                <td className="p-4">{new Date(paymentDate).toLocaleDateString()}</td>
                                <td className="p-4">{new Date(subscriptionEndDate).toLocaleDateString()}</td>
                                <td className="p-4 text-xs opacity-85">{paymentID}</td>
                            </tr>
                        </tbody>
                    )}
                )}
            </table>
        </div>
    )
}

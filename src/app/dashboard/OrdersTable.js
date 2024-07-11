const getOrdersData = async (path) => {
    const strapiBaseUrl = process.env.NEXT_PUBLIC_STRAPI_URL
    const strapiToken = process.env.STRAPI_ORDER_TOKEN
    try {
        const res = await fetch(strapiBaseUrl + path,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${strapiToken}`,
                },
                cache: 'no-cache'
            }
        )
        const data = await res.json()
        return data.data.length > 0 ? data.data : null
    } catch (error) {
        console.log(error)
    }
}

export const OrdersTable = async ({ email }) => {
    const orders = await getOrdersData(`/api/orders?filters[email][$eq]=${email}`)

    if(!orders) 
        return <p>No se encontraron ordenes registradas.</p>

    return (
        <div className="overflow-auto max-h-screen rounded-lg border border-gray-200  text-gray-900">
            <table className="w-full border-collapse bg-slate-100 text-left text-sm text-gray-700">
                <thead className="bg-gray-100 text-center">
                    <tr>
                        <th scope="col" className="p-4 md:p-6 font-medium">Plan</th>
                        <th scope="col" className="p-4 md:p-6 font-medium">Estado</th>
                        <th scope="col" className="p-4 md:p-6 font-medium">Precio</th>
                        <th scope="col" className="p-4 md:p-6 font-medium">Fecha de pago</th>
                        <th scope="col" className="p-4 md:p-6 font-medium">Fecha de finalización</th>
                        <th scope="col" className="p-4 md:p-6 font-medium">Identificador</th>
                    </tr>
                </thead>
                {orders.map(({ id, attributes }) => {
                    const { status, plan, amount, paymentDate, subscriptionEndDate, paymentID } = attributes
                    return (
                        <tbody key={id} className="divide-y divide-gray-200 border-t border-gray-200 text-center">
                            <tr>
                                <th className="p-4 font-medium">{plan}</th>
                                <td className="p-4">
                                    <span
                                        className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-600"
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

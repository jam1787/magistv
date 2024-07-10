export const OrdersTable = () => {
    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200  text-gray-900">
            <table className="w-full border-collapse bg-slate-100 text-left text-sm text-gray-700">
                <thead className="bg-gray-100 text-center">
                    <tr>
                        <th scope="col" className="px-4 py-4 md:p-6 font-medium">Plan</th>
                        <th scope="col" className="px-4 py-4 md:p-6 font-medium">Estado</th>
                        <th scope="col" className="px-4 py-4 md:p-6 font-medium">Precio</th>
                        <th scope="col" className="px-4 py-4 md:p-6 font-medium">Fecha de pago</th>
                        <th scope="col" className="px-4 py-4 md:p-6 font-medium">Fecha de finalización</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 border-t border-gray-200 text-center">
                    <tr>
                        <th className="p-4 md:p-6 font-medium">Premium</th>
                        <td className="p-4">
                            <span
                                className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-600"
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                Pagado
                            </span>
                        </td>
                        <td className="p-4 md:px-6">USD 87</td>
                        <td className="p-4 md:px-6">01/01/2021</td>
                        <td className="p-4 md:px-6">01/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

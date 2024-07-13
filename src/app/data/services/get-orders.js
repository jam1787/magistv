export const getOrdersData = async (path) => {
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
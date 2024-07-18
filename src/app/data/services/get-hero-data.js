export const getStrapiData = async (path) => {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL
    try {
        const res = await fetch(baseUrl + path, { cache: 'no-store' })
        const data = await res.json()
        return data.data.attributes
    } catch (error) {
        console.error(error)
    }
}
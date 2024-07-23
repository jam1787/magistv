export const getStrapiData = async (path) => {
    const baseUrl = process.env.STRAPI_URL
    try {
        const res = await fetch(baseUrl + path)
        const data = await res.json()
        return data.data.attributes
    } catch (error) {
        console.error(error)
    }
}
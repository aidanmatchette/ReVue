import axios from "axios"


const tryCatchFetch = async (axiosCall) => {
    try {
        const response = await axiosCall()
        return response.data || {message: 'success'}
    } catch (e) {
        console.error("---- Error ----", e.response ? e.response : e)
        return null
    }
}

const vetfitAPI = {}

vetfitAPI.createPortfolio = async (newForm) => {
    return await tryCatchFetch(() => axios.post('/portfolio/', newForm))
}

vetfitAPI.listPortfoliosByUser = async () => {
    return await tryCatchFetch(() => axios.get(`/portfolio/`, null))
}

vetfitAPI.deletePortfolioById= async (id) => {
    return await tryCatchFetch(() => axios.delete(`/portfolio/${id}`))
}
export default vetfitAPI

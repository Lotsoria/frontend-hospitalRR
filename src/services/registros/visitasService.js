import axios from "axios"
const API_URL = "http://localhost:3015/visitas/"

export const createVisita = async (visita) => {
    try {
        const response = await axios.post(API_URL + "createVisita", visita)
        console.log("response", response)
        return response
    } catch (error) {
        console.error("No se pudo crear la visita", error)
        return null
    }
}

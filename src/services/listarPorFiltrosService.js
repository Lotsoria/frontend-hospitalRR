import axios from "axios";
const API_URL = "http://localhost:3015/visitas/";

export const listarPorFiltros = async (filtros) => {
    try {
        const response = await axios.get(API_URL + "getVisitaByTipoMuestra/" + filtros);
        return response.data;
    } catch (error) {
        console.error("Error al listar por filtros", error);
        return null;
    }
}
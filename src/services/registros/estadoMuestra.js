import axios from "axios";
const API_URL = "http://localhost:3015/estadosMuestra/";

export const getEstadosMuestra = async () => {
    try {
        const response = await axios.get(API_URL + "getEstadosMuestra");
        console.log("response", response);
        return response;
    } catch (error) {
        console.error("No se encontro un estado de muestra con este id", error);
        return null;
    }

};

export const getEstadoMuestraById = async (id) => {
    try {
        const response = await axios.get(API_URL + "getEstadoMuestraById/" + id);
        console.log("response", response);
        return response;
    } catch (error) {
        console.error("No se encontro un estado de muestra con este id", error);
        return null;
    }
};
import axios from "axios";
const API_URL = "http://localhost:3015/tiposExamen/";

export const getTiposExamen = async () => {
    try {
        const response = await axios.get(API_URL + "getTiposExamen");
        console.log("response", response);
        return response;
    } catch (error) {
        console.error("No se encontro un tipo de examen con este id", error);
        return null;
    }

};

export const getTipoExamenById = async (id) => {
    try {
        const response = await axios.get(API_URL + "getTipoExamenById/" + id);
        console.log("response", response);
        return response;
    } catch (error) {
        console.error("No se encontro un tipo de examen con este id", error);
        return null;
    }
};
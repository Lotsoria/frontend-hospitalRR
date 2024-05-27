import axios from "axios";
const API_URL = "http://localhost:3015/examenes/";

export const createExamen = async (examen) => {
    try {
        const response = await axios.post(API_URL + "createExamen", examen);
        console.log("response", response);
        return response;
    } catch (error) {
        console.error("No se pudo crear el examen", error);
        return null;
    }
    }
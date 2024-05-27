import axios from "axios";
const API_URL = "http://localhost:3015/tiposMuestra/";

export const getTiposMuestra = async () => {
  try {
    const response = await axios.get(API_URL + "getTiposMuestra");
    console.log("response", response);
    return response;
  } catch (error) {
    console.error("No se encontro un tipo de muestra con este id", error);
    return null;
  }
};

export const getTipoMuestraById = async (id) => {
  try {
    const response = await axios.get(API_URL + "getTipoMuestraById/" + id);
    console.log("response", response);
    return response;
  } catch (error) {
    console.error("No se encontro un tipo de muestra con este id", error);
    return null;
  }
};

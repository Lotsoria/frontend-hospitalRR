import axios from "axios";
const API_URL = "http://localhost:3015/medicos/";



export const getMedicosById = async (id) => {
  try {
    const response = await axios.get(API_URL + "getByid/" + id);
    console.log("response", response);
    return response;
  } catch (error) {
    console.error("No se encontro un medico con este id", error);
    return null;
  }
};

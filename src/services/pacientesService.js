import axios from "axios";
const API_URL = "http://localhost:3015/pacientes/";
export const getPacienteByCodigoUnico = async (codigo_unico) => {
  try {
    const response = await axios.get(
      API_URL + "find/" + codigo_unico
    );
    console.log("response", response);
    return response;
  } catch (error) {
    console.error("No se encontro un paciente con ste codigo unico", error);
    return null;
  }
};

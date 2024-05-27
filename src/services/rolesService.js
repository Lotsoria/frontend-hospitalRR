import axios from 'axios';
const API_URL = 'http://localhost:3015/roles/';

export const getRoleById = async (id) => {
  try {
    const response = await axios.get(API_URL + "getRole/" +id);
    return response.data;
  } catch (error) {
    console.error('No se encontro un rol con este id', error);
    return null;
  }
} 
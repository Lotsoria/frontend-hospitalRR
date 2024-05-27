import axios from 'axios';

export const login = async (correo_electronico, contraseña) => {
  try {
    const response = await axios.post('http://localhost:3015/auth/login', {
      correo_electronico,
      contraseña,
    });
    console.log('response', response.data.data.nombre_completo);
    const nombresArray = response.data.data.nombre_completo.split(' ');
    //guardar en el session_storage
    sessionStorage.setItem('n1', nombresArray[0]);
    sessionStorage.setItem('n2', nombresArray[1]);
    sessionStorage.setItem('n3', nombresArray[2]);
    sessionStorage.setItem('n4', nombresArray[3]);
    sessionStorage.setItem('rol', response.data.data.id_rol);
    return response.data;
  } catch (error) {
    console.error('Error while logging in', error);
    return null;
  }
};
export const logout = () => {
  sessionStorage.clear();
  window.location.href = '/';
};

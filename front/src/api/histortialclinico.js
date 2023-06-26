import axios from "./axios";

export const createRequest = (historial) => axios.post('/doctor/historialmedico',historial);
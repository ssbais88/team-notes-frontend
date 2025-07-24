import axios from "axios";

const API = "http://localhost:5000";

export const getNotes = () => axios.get(`${API}/notes`);
export const createNote = (data) => axios.post(`${API}/notes`, data);
export const updateNote = (id, data) => axios.put(`${API}/notes/${id}`, data);
export const deleteNote = (id) => axios.delete(`${API}/notes/${id}`);

import axios from 'axios';

const url = 'http://localhost:1337/api/pegawais?populate=*';
export const readTodos = () => axios.get(url);


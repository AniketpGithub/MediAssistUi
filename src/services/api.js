import axios from 'axios';
//const baseURL = 'http://localhost:8080'
const api = axios.create({
    baseURL: 'http://localhost:8080',
})

// export const postData=(url,data)=>{
//     axios.post(`${baseURL}/${url}`, data);
// }

export default api;
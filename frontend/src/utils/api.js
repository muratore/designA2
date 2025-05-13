import axios from "axios"


 const api = axios.create({
    baseURL: "http://localhost:3000" // Replace with your API's base URL
    // You can add other defaults here, like headers for authentication
    // headers: { 'Authorization': 'Bearer your_token' }, 
})

export default api
import axios from "axios"


 const api = axios.create({
    baseURL: "https://api.designa2.com.br" // Replace with your API's base URL
    // You can add other defaults here, like headers for authentication
    // headers: { 'Authorization': 'Bearer your_token' }, 
})

export default api
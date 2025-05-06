import api from "../utils/api"; //chama o axios criado na pasta utils
import useFlashMessage from "./useFlashMessage";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = ()=>{
   const navigate = useNavigate()
    const [authenticated, setAuthenticated] = useState(false)
    const {setFlashMessage} = useFlashMessage()
    

    // Inserir o token para não ter que verificar a toda hora
    useEffect(()=>{
        const token = localStorage.getItem("token")

        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }

    },[])

    async function register(user){

        let message = "Cadastro realizado com sucesso!"
        let msgType = 'success'

        try {
            const data = await api.post("/admin/create", user).then(response =>{
                return response.data
            })
         await authUser(data)
        } catch (error) {
            
             message = error.response.data.message
            msgType = 'error'
        }
        setFlashMessage(message, msgType)
    }

    async function createJob(formData, token){

        let message = "Job cadastrado com sucesso!"
        let msgType = 'success'
        try {
            const response = await api.post("/jobs/create", formData, {headers: {
              "Content-Type": "multipart/form-data",
              Authorization: token ? `Bearer ${token}`: ""
            }})
             console.log(response.data);
             navigate("/")
             
          } catch (error) {
            message = error.response.data.message
            msgType = 'error'
          }
          setFlashMessage(message, msgType)
          
    }

    async function authUser(data){
        setAuthenticated(true)
        localStorage.setItem("token", JSON.stringify(data.token))
        navigate("/")
    }
    function logout(){
        let msgType = 'success'
        let msg = 'Seu logout foi feito com sucesso'
        // Mudar o setAthenticated para false
        setAuthenticated(false)
        // Remover o token do local storage
        localStorage.removeItem("token")
        // limpar os headers da requisição
        api.defaults.headers.Authorization = undefined;

        navigate("/")
        setFlashMessage(msg, msgType)

    }

    async function login(user){
        let msgText = "Login realizado com Sucesso"
        let msgType = 'success'

        try {
            const data = await api.post("/admin/login", user)
            .then((response)=> response.data)
            authUser(data)

        } catch (error) {
            msgText = error.response.data.message
            msgType = 'error'
        }
        setFlashMessage(msgText, msgType)
    }
    return {register, authenticated, logout, login, createJob}
}

export default useAuth;
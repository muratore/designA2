

import {useState } from "react";
import JobForm from "../../components/form/JobForm"
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import useFlashMessage from "../../hooks/useFlashMessage";

function AddJob() {
  const [token] = useState(localStorage.getItem('token') || "")
  const navigate = useNavigate
  const setFlashMessage = useFlashMessage()
 
    async function register(job){
      let msgType = 'success'
      let message = "Job cadastrado com sucesso!"
  
      const formData = new FormData()
  
      Object.keys(job).forEach(key =>  {
        if(key === "images"){
          for(let i = 0; i < job[key].length; i++){
            formData.append(key, job[key][i])
          }
        }else{
          formData.append(key, job[key])
        }
      });
     
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

  return (
    <div className=" text-zinc-500 px-8 xl:px-32">
      
        <JobForm handleSubmit={register}  btnTxt={"Criar Job"} />
      
    </div>
  )
}

export default AddJob

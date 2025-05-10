import {useState, useEffect} from 'react'
import JobForm from "../../components/form/JobForm"
import { useParams } from "react-router-dom";
import api from '../../utils/api';
import useFlashMessage from '../../hooks/useFlashMessage';

function EditJob() {
  const [job, setJob]=useState({})
    const [token] = useState(localStorage.getItem("token") || "")
    const {id} = useParams() // Pegar Id do Job
    const {setFlashMessage} = useFlashMessage()

  // Buscar job no banco por meio do ID
 useEffect(()=>{
  const getJobFromId =  async ()=>{
      try {
        const data = await api.get(`/jobs/${id}`, {headers:{
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "multipart/form-data"
        }})
        const response = await data.data.job
        setJob(response)
          
      } catch (error) {
        console.log(error.response.data.message);
        
      }
  }
  getJobFromId()
 },[id, token])

  async function editarJob(job){
    let msgType = 'success'

    const formData = new FormData()

    Object.keys(job).forEach(key =>  {
      if(key === "images"){
        
        
        for(let i = 0; i < job[key].length; i++){
          console.log(job[key][i]);
          formData.append(key, job[key][i])
        }
      }else{
        formData.append(key, job[key])
        console.log(job[key]);
      }
    });
   
    try {
      const response = await api.patch(`/jobs/${job._id}`, formData, {headers:{
        Authorization: `Bearer ${JSON.parse(token)}`,
        "Content-Type": "multipart/form-data"
      }})

      return response.data
    } catch (error) {
      msgType='error'
      setFlashMessage(error.response.data.message, msgType )
    }

  }

  return (
    <div className=" text-zinc-500 ">
      {job._id
       &&
    <JobForm handleSubmit={editarJob} jobData={job}  btnTxt={"Editar um job"} />
    }
         
    </div>
  )
}

export default EditJob

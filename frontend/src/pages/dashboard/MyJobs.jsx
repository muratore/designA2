import { useContext, useState, useCallback} from 'react'
import Title from '../../components/Title'
import JobContext from '../../context/JobsContext'
import { Link } from 'react-router-dom'
import {IconTrashX, IconEdit} from "@tabler/icons-react"
import api from '../../utils/api'
import useFlashMessage from "../../hooks/useFlashMessage";

const urlImg = import.meta.env.VITE_REACT_APP_API

function MyJobs() {
const {job, setJob } = useContext(JobContext)
const {setFlashMessage} = useFlashMessage()
const [token] = useState(localStorage.getItem('token') || "")


const deleteJob = useCallback( async (id)=>{
let msgType = "success"
       try {
        const data = await api.delete(`/jobs/${id}`, {headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
        }})
       const response = await data
       setFlashMessage(response.data.message, msgType); // Access message from data.data
      setJob((prevJobs) => prevJobs.filter((job) => job._id !== id)); // Update jobs state

       } catch (error) {
        msgType = "error"
        setFlashMessage(error.response.data.message, msgType)
       }
        
        
    
},[setFlashMessage, setJob, token])
// Carregar os jobs

  return (
    <section className='flex flex-col px-8 w-screen sm:px-12 md:px-16 pt-32 mx-auto'>
        <div>
            <Title titulo={"Meu portfolio / dashaboard"}/>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4'>
            {job.map((job)=>(
                <div className='flex flex-col h-[250px]' key={job._id}>
                    

                    <div 
                    className='bg-center bg-cover w-full h-full'
                    style={{backgroundImage: `url(${urlImg}/images/jobs/${job.images[0]})`}}>
                     
                    </div>
                    <div className='text-white h-12 flex justify-around py-2 mb-2'>

                    <Link to={`/dashboard/edit/${job._id}`} className='cursor-pointer'><IconEdit size={28} stroke={1} /></Link>
                    <button onClick={()=>deleteJob(`${job._id}`)} className='cursor-pointer'><IconTrashX size={28} stroke={1} /></button>
                    </div>
                    

                </div>
            ))}
        </div>
      
    </section>
  )
}

export default MyJobs

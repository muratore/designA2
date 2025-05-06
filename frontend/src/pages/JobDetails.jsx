import { useState, useEffect } from "react"
import api from "../utils/api"
import { useParams } from "react-router-dom"

function JobDetails() {
const [job, setJob] = useState({})
const {id }= useParams()

const urlImg = import.meta.env.VITE_REACT_APP_API;

    // Carregar a página do job específico
    useEffect(()=>{

      const getJobDetail = async ()=>{
        try {
          const data = await api.get(`/jobs/${id}`)
          const response = data
          console.log(response.data.job);
          
          setJob(response.data.job)
        } catch (error) {
          console.log(error);  
        }
      }
      getJobDetail()

    },[id])
  return (
    <section className={`bg-zinc-950 w-screen flex flex-1 px-8 lg:px-16 xl:px-32 text-zinc-500`}>
    
      <div className=" flex-1 w-full h-full">
        {job && job.images && 
          <div className="flex bg-zinc-950 flex-col py-32 w-full">
            <div className=" w-full md:w-[25%] mr-12 mb-12 md:fixed">
              <p className="mb-4">Cliente: </p>
            <h3 className="text-zinc-500 font-bold mb-12">
              {job.client}
            </h3>
            <p>{job.description}</p>
            </div>
            <div className="flex w-full items-end flex-col gap-8"  > 
            {job.images.map((url)=>(
              
              <div key={url}
              style={{
                backgroundImage: `url(${urlImg}/images/jobs/${url}) `
              }}
              className="w-full md:w-[65%] h-80 sm:h-96 md:h-120 lg:h-132 xl:h-160 bg-center bg-cover"
              >
              </div>
              
            ))}
            </div>
          </div>
        }
      </div>
    </section>
  )
}

export default JobDetails

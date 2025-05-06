import { createContext, useState, useEffect } from "react";
import api from "../utils/api";
import useAuth from "../hooks/useAuth";
const JobContext = createContext()

export const JobProvider = ({children})=>{
    const {createJob} = useAuth()
    const [job, setJob] = useState([])

    // Acessar o banco para obter os jobs
useEffect( ()=>{
    const dataFetch = async ()=>{
        const getAllJobsFromDb = await api.get("/jobs")
        const response = getAllJobsFromDb.data.jobs
        setJob(response)
    }
    dataFetch()
},[])

    return (
        <JobContext.Provider value={{job, setJob, createJob}}>
            {children}
        </JobContext.Provider>
    )
}

export default JobContext
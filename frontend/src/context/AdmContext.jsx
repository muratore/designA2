import { createContext } from "react";

import useAuth from "../hooks/useAuth";

const AdmContext = createContext()

export const AdmProvider = ({children})=>{
const {register, authenticated, logout, login} = useAuth()
    return (
        <AdmContext.Provider value={{register, authenticated, logout, login}}>
{children}
        </AdmContext.Provider>

    )

}

export default AdmContext
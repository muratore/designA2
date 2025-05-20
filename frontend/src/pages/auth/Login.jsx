import {useState, useContext} from "react"
import Title from "../../components/Title"
import Input from "../../components/form/Input"

import AdmContext from "../../context/AdmContext"

function Login() {
const [adm, setAdm]=useState({})
const {login} = useContext(AdmContext)

 function onHandleChange(e){    
    
    setAdm({...adm, [e.target.name]: e.target.value})
 }
    async function handleSubmit(e){
        e.preventDefault()
        // Essa lógica está no useAuth
        login(adm)

    }
  return (
    <div className="pt-32">
     
      <div className="container flex flex-col mx-auto">
        <Title titulo={"Entrar no Sistem"} />
        <form onSubmit={handleSubmit} className="max-w-[300px]">
      
          <Input
            texto={"E-mail"}
            type={"email"}
            name={"email"}
            placeholder={"Email do cliente"}
            onHandleChange={onHandleChange}
          />
          <Input
            texto={"Senha"}
            type={"password"}
            name={"password"}
            placeholder={"Insira sua senha"}
            onHandleChange={onHandleChange}
            autoComplete={"on"}
          /> 

          <input
            type="submit"
            value={"Entrar"}
            className="bg-zinc-700 cursor-pointer border-2 border-zinc-300 text-white w-48 h-12 hover:bg-zinc-600 px-4 py-2 rounded-sm mt-8"
          />
        </form>
      </div>
    </div>
    
  )
}

export default Login

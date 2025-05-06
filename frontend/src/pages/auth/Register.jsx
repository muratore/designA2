import {useState, useContext } from "react"
import Input from "../../components/form/Input"
import Title from "../../components/Title"
import AdmContext from "../../context/AdmContext"

function Register() {
const {register } = useContext(AdmContext)
    const [adm, setAdm] = useState({})

    function onHandleChange(e){
        setAdm({... adm, [e.target.name]: e.target.value})
    }
  async  function handleSubmit(e){
        e.preventDefault()
  console.log(adm);
  register(adm)

    }
  return (
    <div>
        <div className="container flex flex-col mx-auto">
            <Title titulo={"Registrar Admin"}/>

            <form onSubmit={handleSubmit} className="max-w-[300px]">
                <Input
                type={"text"}
                name={"name"}
                texto={"Nome:"}
                placeholder={"Digite o seu nome:"}
                onHandleChange={onHandleChange}
                />
                <Input
                type={"email"}
                name={"email"}
                texto={"Email"}
                placeholder={"Digite o seu nome:"}
                onHandleChange={onHandleChange}
                />
                <Input
                type={"password"}
                name={"password"}
                texto={"Senha"}
                placeholder={"Digite a sua senha:"}
                onHandleChange={onHandleChange}
                autoComplete={"on"}
                />
                <Input
                type={"password"}
                name={"confirmpassword"}
                texto={"Confirme a sua senha"}
                placeholder={"Confirme a sua senha:"}
                onHandleChange={onHandleChange}
                autoComplete={"on"}
                />

<input
            type="submit"
            value={"Cadastrar"}
            className="bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-sm mt-8"
          />
            </form>
        </div>
    </div>
  )
}

export default Register

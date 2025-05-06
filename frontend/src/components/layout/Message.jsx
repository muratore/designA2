import { useEffect, useState } from "react"
import bus from "../../utils/bus"

function Message() {
    const [visibility, setVisibility] = useState(false)
const [type, setType] = useState("")
const [message, setMessage] = useState("")

useEffect(()=>{
 bus.addListener("flash", ({message, type})=>{
    setVisibility(true)
    setMessage(message)
    setType(type)

    setTimeout(()=>{
setVisibility(false)
    }, 3000)
 })
},[])

  return (
    visibility && (
    <div className={`p-4 pt-32 mb-3 border-2 md:max-w-[40%] text-center text-white opacity-50 ${type === "error"? 'bg-red-500' : "bg-green-600"}`}>
        <p className="opacity-100">{message}</p>
       </div>
    )
  )
}

export default Message

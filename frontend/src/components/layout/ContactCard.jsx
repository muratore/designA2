import { Link } from "react-router-dom"
import React from "react"
function ContactCard({to,text,icon}) {
  return (
    <div>
      <Link
        className={`flex gap-2 mb-2 justify-center`}
        to={to}>
        
        <span className="flex text-1.5xl lg:text-3xl items-center gap-2">
        {React.cloneElement(icon, {}) }
        {text}
        </span>
        </Link>
      
    </div>
  )
}

export default ContactCard

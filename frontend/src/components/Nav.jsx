import Logo from "./Logo";
import MainLink from "./MainLink";
import { useContext, useState, useEffect } from "react";
import AdmContext from "../context/AdmContext";
import {IconMenu2 } from "@tabler/icons-react";

function Nav() {
const {authenticated, logout} = useContext(AdmContext)
const [open, setOpen] = useState("-top-0")
const [size, setSize] = useState(0)

function toggleNav(){
  open === "-top-0" ? setOpen("-top-112") : setOpen("-top-0")
}

useEffect(()=>{
  if(size < 1024) {
    setOpen("-top-112")
  }
  window.addEventListener("resize", setWindow)
},[size])

function setWindow() {
  setSize(Number(window.innerWidth))
}


return (
    <div className=" backdrop-blur-md bg-zinc-950/80 flex mx-auto py-6 h-24 z-50 fixed w-full">
      <nav className="w-full px-8 xl:px-32 mx-auto flex justify-between items-center">
        <Logo className={"z-40"} />

       
 <ul className={`gap-8 w-full fixed ${open} transition-all duration-300 right-0 px-8 bg-zinc-950 lg:bg-transparent pt-28 lg:pt-0 lg:static lg:flex lg:justify-end`}>
 <MainLink onClick={ ()=>toggleNav()} url={"/"} texto={"portfolio"} />
   <MainLink onClick={ ()=>toggleNav()} url={"/sobre"} texto={"nós"} />
   <MainLink onClick={ ()=>toggleNav()} url={"/contact"} texto={"contato"} />
   {/* Retirei o link para deixar os trabalhos diretamente na home do site */}
   {/* <MainLink url={"/portfolio"} texto={"portfolio"} /> */}
  { authenticated && 
   <>
   <MainLink onClick={ ()=>toggleNav()} url={"/dashboard/add"} texto={"Criar um Job"} />
   <MainLink onClick={ ()=>toggleNav()} url={"/myjobs"} texto={"Editar Job"} />
   <MainLink onClick={()=>{logout(), toggleNav()}} url={""}  texto={'Sair'}/>
   </>
   }     
</ul>
        
       <div onClick={()=>toggleNav()} 
       className="text-white cursor-pointer lg:hidden z-30"><IconMenu2/>
       </div>

      
      </nav>
    </div>
  );
}

export default Nav;

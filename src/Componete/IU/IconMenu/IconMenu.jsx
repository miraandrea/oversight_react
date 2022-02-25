import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";
import { MdOutlineCloudDownload } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
import './IconMenu.css'

export const IconMenu = () => {
  return (
    <div className='menu'>
        <IoMdHome className='iconmenu'/>
        <p>Inicio</p>
        <IoMdPersonAdd onClick={()=>MstrarAlerta()} className='iconmenu' />
        <p>Registrar</p>
        {/* El icono de menu es opcional */}
        {/* <MdOutlineCloudDownload className='iconmenu' />
        <p>Importar</p> */}
        <IoExitOutline className='iconmenu' />
        <p>Salir</p>
    </div>
    
  )
}
const MstrarAlerta=()=>{
  swal("Su usuario y contraseña es el documento de identidad")

}
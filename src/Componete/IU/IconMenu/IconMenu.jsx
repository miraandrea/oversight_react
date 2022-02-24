import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import './IconMenu.css'

export const IconMenu = () => {
  return (
    <div className='menu'>
    
        <IoMdHome className='iconmenu'/>
        <p>Inicio</p>
        <IoMdPersonAdd className='iconmenu' />
        <p>Registrar</p>
        {/* El icono de menu es opcional */}
        {/* <MdOutlineCloudDownload className='iconmenu' />
        <p>Importar</p> */}
        <IoExitOutline className='iconmenu' />
        <p>Salir</p>
    </div>
  )
}
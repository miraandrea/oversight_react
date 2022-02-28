import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";
import { Register } from '../Register/Register';
import { IoExitOutline } from "react-icons/io5";

import swal from '@sweetalert/with-react';
import './IconMenu.css'

export const IconMenu = () => {
  return (
    <div className='menu'>
        <IoMdHome onClick={()=>Mostrar()} className='iconmenu'/>
        <p>Inicio</p>
        <IoMdPersonAdd onClick={()=>MostrarAlerta1()} className='iconmenu' /> 
        <p>Registrar</p>
        <IoExitOutline onClick={()=>MostrarAlerta2()} className='iconmenu'  /> <p>Salir</p>
        
    
    </div>
  )
}

const MostrarAlerta1=(btn)=>{
  swal({

    buttons: {
      confirm : {text:'cancelar',className:'sweet-warning'}},
    content: <Register></Register>

  })
}

const Mostrar=()=>{
  swal(
    <div>

    </div>
  )
}


const MostrarAlerta2=()=>{
  swal (
    <div>
      <input type="text" placeholder='nombre'/>
      <p>hola</p>
      <button>Registrar</button>
    </div>
  )
}
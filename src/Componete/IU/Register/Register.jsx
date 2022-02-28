import React from 'react'
import '../Register/Register.css'
export const Register = () => {
  return (
    <div>
    <p className='Register' >Registrar</p>
    <hr className='line5'/ >
    <div className='last'>
      <input className='userNameRegistre' type="text" placeholder='Nombres'/>
      <input className='lastName' type="text" placeholder='Apellidos'/>

    </div>

    <div className='number1'>

      <input className='number' type="number" placeholder='Documento Identidad'/>
    </div>
      
      <div className='btn_Registrar'>
      <button className='Registrar' >Registrar</button>

      </div>
      

      <select className='desple'>
        <option value="1">Seleccione un rol</option> 
        <option value="2">Estudiante</option> 
        <option value="3">Docente</option>

      </select>
      
    
  </div>
  )
}

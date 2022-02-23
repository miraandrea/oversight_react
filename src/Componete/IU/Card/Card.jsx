import React from 'react'
import './Card.css'
import foto from '../ImgProfile/ejemplo.jpg'

export const Card = ({ character }) => {
  return (
    <div className="maincard">
      <div className="card">
        {/* <img src={character.img} alt='foto' />
        <p>{character.name}</p>
        <p>{character.document}</p>
        <p>{character.rol}</p> */}
        <img src={foto} alt='foto' />
        <p>Paola Andrea Mira Orozco</p>
        <p>1005207265</p>
        <p>Docente</p>
      </div>  
    </div>
  )
}
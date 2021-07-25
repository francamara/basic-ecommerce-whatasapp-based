import React from 'react'
import image from '../../Assets/image.png'

function Bungee() {
  return (
    <div className='flex flex-col justify-center border-2 border-black p-4 m-4'>
      <h1 className='mx-auto text-3xl mb-4'>Mouse Bungee</h1>
      <img src={image} alt='' />
      <p className='mx-auto p-4 mb-4'>
        Evita que se te enganche el cable del mouse cuando metes esos 360 en el
        cs y asi metes todo head pa.
      </p>
      <a
        className='border-2 mx-2 rounded-sm border-black text-xl text-center p-1'
        href='https://wa.me/5491138991367?text=Me%20gustaria%20saber%20mas%20sobre%20el%20bungee'
      >
        💬 Contactar
      </a>
    </div>
  )
}

export default Bungee

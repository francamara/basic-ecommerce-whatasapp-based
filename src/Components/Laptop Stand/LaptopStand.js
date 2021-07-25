import React from 'react'
// import image from 'https://media0.giphy.com/media/70wcawk81JYLdbZri1/giphy.gif?cid=790b7611cfc8b500e08d820d060aba5e04bcc30997a465d6&rid=giphy.gif&ct=g'

function Bungee() {
  return (
    <div className='flex flex-col justify-center border-2 border-black p-4 m-4'>
      <h1 className='mx-auto text-3xl mb-4'>Mouse Bungee</h1>
      <img
        src='https://media4.giphy.com/media/V7S65qcSZcfTHdzvkT/giphy.gif?cid=790b7611b947446a4f741cf3ce0d0933a6ab5a9bd1529e35&rid=giphy.gif&ct=g'
        alt=''
      />
      <p className='mx-auto p-4 mb-4'>
        Soporte ergonomico para poder mantener la espalda recta durante largas
        sesiones de trabajo.
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

import React from 'react'
// import image from 'https://media0.giphy.com/media/70wcawk81JYLdbZri1/giphy.gif?cid=790b7611cfc8b500e08d820d060aba5e04bcc30997a465d6&rid=giphy.gif&ct=g'

function Bungee() {
  return (
    <div className='flex flex-col justify-center border-2 border-black p-4 m-4'>
      <h1 className='mx-auto text-3xl mb-4'>Stand de Laptop Vertical</h1>
      <img
        src='https://media0.giphy.com/media/70wcawk81JYLdbZri1/giphy.gif?cid=790b7611cfc8b500e08d820d060aba5e04bcc30997a465d6&rid=giphy.gif&ct=g'
        alt=''
      />
      <p className='mx-auto p-4 mb-4'>
        Soporte de laptop para guardar y poder cargar la laptop al mismo tiempo
        de manera segura para que fluya el aire y no recaliente, pudiendo asi
        cuidar mejor de la bateria.
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

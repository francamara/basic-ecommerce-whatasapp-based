import React from 'react'

function Header() {
  return (
    <div>
      <nav class='bg-black p-3'>
        <div class='flex justify-between text-xl text-white'>
          <a href=''>3D Store</a>
          <div>
            <a href='' className='p-2'>
              Productos
            </a>
            <a href='' className='p-2'>
              Info
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header

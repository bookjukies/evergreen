import React from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {

  
  return (
    <nav className=' h-screen bg-stone-50 fixed border-t left-0 w-screen md:w-1/3 drop-shadow-2xl z-50 md:pt-8'>
      <div className="pt-12 pl-4 gap-6 font-bold text-xl">
        <Link className='block mb-4' to="/track-order" onClick={props.toggle}>Track Order</Link>
        <a className='block mb-4' href="/#faq" onClick={props.toggle}> FAQ </a>
        <Link className='block mb-4' to="/ebook" onClick={props.toggle}> Ebook </Link>
        <Link className='block bg-orange-400 text-white w-[90vw] text-center mt-12 py-2 ' to="/products" onClick={props.toggle}> SHOP NOW</Link>
      </div>
    </nav>
  )
}

export default Menu
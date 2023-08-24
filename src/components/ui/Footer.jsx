import React from 'react'


const Footer = () => {
  const contact = "0613271913"
  const email = "support@evergreenpasture.co.za"
  const name = "Ever Green Pasture"
  const time = new Date().getFullYear()

  return (
    <footer className='bg-black text-white grid justify-center py-8  w-full px-4 '>
        <h3 className='text-lg font-bold'>Contact Us</h3>
        <div className="flex-col">
            <p>{contact}</p>
            <p>{email}</p>
        </div>
        <p>Copyright {time} {name} All Rights Reserved</p>
        <p>Site By Bongani Ntshangase @ <a href="https://www.astroharpy.co.za" target="_blank" rel="noopener noreferrer">Astro Harpy</a></p>
    </footer>
  )
}

export default Footer
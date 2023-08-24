import React from 'react'

function BarsOverlay({children}) {
  return (
    <div className='w-screen h-[85vh]  fixed top-16'>        
        {children}
    </div>
  )
}

export default BarsOverlay
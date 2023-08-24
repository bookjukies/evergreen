import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useProduct from '../../hooks/useProduct'

const Shipping = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const {bag, bagTotal} = useProduct()
  const delivery = 100
  const cartTotal = bagTotal+delivery

  const move = () =>{
    navigate("/checkout/payment", {state:{details: location.state, bag: bag, cartTotal: cartTotal}})
  }
  if( bagTotal === 0){
    navigate("/")
  }
  return (
    <div className='w-screen px-4 grid grid-cols-1 place-content-center md:w-full'>
        <div className="py-4 border-2 border-gray-400 px-2 rounded-md mb-8">
          <div className="border-b-2 border-b-gray-400">
            <h3 className='text-gray-500'>Contact</h3>
            <p className=''>{location.state.data.email}</p>
          </div>
          <div className="mt-4 ">
            <h3 className='text-gray-500'>Ship to</h3>
            <p>{location.state.data.city} {location.state.data.adress_line_1} {location.state.data.adress_line_2}</p>
          </div>
        </div>

        <h3 className='mb-4 font-semibold text-lg'>Shipping method</h3>
        <form action="" >


          <div className="border flex px-2 py-3 rounded border-gray-400 w-full">
            <input type="radio" checked={true} id="delivery" name="delivery_method" value="delivery" />
            <label for="delivery"  className='w-full flex px-2'><span className='grow'>Delivery</span >
            <span className='text-right' >R 100.00</span >
            </label>
          </div>

        </form>
        <button className='bg-black text-white w-full place-self-center p-2 rounded my-8 ' onClick={move}>Continue to Payment</button>
    </div>

  )
}

export default Shipping
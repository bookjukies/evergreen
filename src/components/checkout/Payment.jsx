import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'


const Payment = () => {
  
  const location =useLocation()
  const [form, setForm]  = useState(null)
  useEffect(()=>{
    test()
}, [])

axios.defaults.withCredentials=true



  const test = async () =>{
    const data = [location.state]
    const id = await `${data[0].details.data.email + Date.now()}`
    const {cartTotal} = data[0]
    const res = await axios.post("https://mimi-client.onrender.com/pay", {id, cartTotal,bag: data[0].bag, details : data[0].details.data})
    setForm(res.data);
  }
  
  return (
    <div className='h-cover w-screen px-6 md:w-full'>
        <div className="py-4 border-2 px-2 rounded-md mb-8 border-gray-400">
          <div className="border-b-2 border-b-gray-400">
            <h3 className='text-slate-400'>Contact</h3>
            <p>{location.state.details.data.email}</p>
          </div>
          <div className="mt-4 border-b-2 border-b-gray-400">
            <h3 className='text-slate-400 '>Ship to</h3>
            <p>{location.state.details.data.city} {location.state.details.data.adress_line_1} {location.state.details.data.adress_line_2}</p>
          </div>
          <div className="mt-4">
            <h3 className='text-slate-400'>Method</h3>
            {<p>Courier</p>}
          </div>
        </div>
        <div className="py-4 ">
          <h2 className='mb-2'>Payment</h2>
          <div className="flex border rounded align-middle border-gray-400">
            <img className="w-12" src="/images/visa.png" alt="payment procesor visa" />
            <img className="w-12" src="/images/master.png" alt="payment procesor mastercard" />
          </div>
        </div>

        <div className="">
          <h2 className='mb-2'>Billing Adress </h2>
          <form action="" >

          <div className="border flex px-2 py-4 rounded border-gray-400">
            <input type="radio" checked={true} id="different_adress" name="billing_adress" value="different_adress" />
            <label for="different_adress"  className='flex '>Use Different Adress</label>
          </div>

        </form>
          
        </div>

      <div className="bg-black text-white w-full capitalize py-2 my-8 md:w-full md:px-32 md:mt-4 text-center" dangerouslySetInnerHTML={{__html: form}}></div>
    </div>
  )
}

export default Payment
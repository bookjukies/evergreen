import useProduct from '../../hooks/useProduct';
import SideBarItem  from './SideBarItem';
import { Cross } from '../ui/Icons';
import {Link} from 'react-router-dom';
import { useState } from 'react';


const SideBar = (props) => {
    const {products, bag, setBagTotal} = useProduct();

    const [bagItems, setBagItems] = useState([])


    const sum = (prev, cur) => prev + cur
    
    const prices = bagItems.map(entry => entry.total)
    const total = prices.reduce(sum, 0)

    setBagTotal(total)

  return (
    <div className="border-t">
    <div className=' h-screen bg-stone-50 fixed right-0 w-screen top-0  md:h-[100vh] overflow-y-auto md:w-1/3 md:top-16 drop-shadow-2xl z-50 '>

    <div className="flex justify-between p-2" > <h2 className='text-xl font-extrabold' >Bag</h2>
        <button onClick={props.toggle}><Cross  color = {"black"}/></button>
    </div>
        
        { bag.map(item => <SideBarItem products={products} quantity={item.quantity} name={item.name} key={item.name} imageUrl={item.imageUrl} price={item.price} setBagItems= {setBagItems}/> )}
        {bag.length >=1 ? <div className="flex-col content-center">
                <div className="text-center font-bold text-xl pt-4">Total :  R {total}</div>
                <Link to="/checkout"><button onClick={props.toggle} className="block border border-black w-11/12 p-2 my-4 bg-black text-white mx-auto">CHECKOUT</button></Link>
        </div> : <p className='text-center py-20'>No items on Bag</p>}
        <Link to="/products" className="block border border-black w-11/12 p-2 my-4 bg-black text-white mx-auto uppercase text-center" onClick={props.toggle}>Continue Shopping</Link>
    </div></div>
  )
}

export default SideBar

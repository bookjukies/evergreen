import React, {useEffect, useState} from 'react'

import { Trash} from '../ui/Icons';
import useProduct from '../../hooks/useProduct';
import BagImgLoader from '../utils/BagImgLoader';



const SideBarItem = (props) => {
    const [quantity, setQuantity] = useState(props.quantity)
    const {deleteBagItem, quantityBagUpdate} = useProduct()
  

    const  separateNumber = (num) =>{
        const nfObject = new Intl.NumberFormat('en-US');
        const output = nfObject.format(num);
        return output
    }

    const inputQuantityHandle = (e) =>{
        let current = e.target.value 
        setQuantity(current)

    }

    const incrementHandle = (e) =>{
        let current = quantity
        setQuantity(+current +1)
        
    }

    const decrementHandle = (e) =>{
        let current = quantity
        setQuantity(+current -1)
        
    }

    if(quantity === 0){
        setQuantity(1)
    }

    const deleteItemHandle = (e) =>{
        //filtering the out the deleted items from the global bag state
        props.setBagItems((prev)=>{
            const uniqueEntries = prev.filter(entry => entry.name !== props.name)
            return [...uniqueEntries]
        })
        deleteBagItem(props.name)
        setQuantity(0)
    }

    quantityBagUpdate(props.name, quantity)
    
    //add the itam on the bag initially
    useEffect(()=>{
        //prev is initally an emppy array unless the bag already had items
        props.setBagItems((prev) =>{
        //filtering the bag to remove the current item
        const uniqueEntries = prev.filter(entry => entry.name !== props.name)
        //adding back the current item with updated quantity values
        return[...uniqueEntries, {name: props.name, total: quantity*props.price}]
    })},[quantity])
    

  return (

    <div className="grid grid-cols-2 gap-2 px-2 border-b-2 border-slate-300 py-4" key={props.name} >
        <div className="drop-shadow-lg">
            {props.products.length > 0 ? <img src={props.imageUrl} alt="" /> : <BagImgLoader />}
        </div>
        <div className="flex-col">
            <div className="flex justify-between" > {props.products.length > 0 ? <h3 className='text-lg font-bold capitalize'>{props.name}</h3>: <p>Loading...</p>}
            <button onClick={deleteItemHandle}><Trash /></button></div>
            {props.products.length > 0 ? 
            <div>
                <h3 className='text-md font-semibold dom_prize' >R {separateNumber(props.price*quantity)}</h3>
                <h3  className='text-sm py-2 italic'><span>R </span>{separateNumber(props.price)} X {quantity}</h3>
            </div>: <p>Loading...</p>}

            {/* Quantity controle */}
            <div className='border flex justify-evenly border-black p-2 w-full' >
                <button disabled={quantity === 1} className="font-bold" onClick={decrementHandle}>-</button>
                    <input type="number" value={quantity || ''} min={1} className="w-8 text-center" onChange={inputQuantityHandle}/>
                <button className='font-semibold'  onClick={incrementHandle}>+</button>
            </div>
        </div>
    </div>

  )
}

export default SideBarItem
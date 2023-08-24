import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import BagImgLoader from '../utils/BagImgLoader'

const ProductItem = (props) => {
    const [isLoading, setIsLoading] = useState(true)
    const navigate  = useNavigate()

    const goToDetails =()=>{
        
        const id = props.name.split(' ')
        if(id.length > 2){
            const name = id.join("%20")
            
            navigate(`/products/${name}`, {state:{...props}})
        } else{
            // console.log(props);
            navigate(`/products/${props.name}`, {state:{...props}})
        }
        
    }
  return (
   
        <li className='my-4 shadow-xl pb-4 border-2'>
            {isLoading? <div className="h-44 bg-slate-200"> <BagImgLoader /> </div> : null }
            <img onClick={goToDetails} src={props.imageUrl} alt={props.item} className={isLoading? "hidden": ""} onLoad={()=> setIsLoading(false)}/>
            <div className='text-center'>
                <p>{props.name}</p>
            <p className='font-bold'>R {props.price}.00</p>

            </div>
            
        </li>

  )
}

export default ProductItem
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

function Test() {
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, control } = useForm();

  const onSubmit = (data) =>{
    // Save the form data to localStorage
    localStorage.setItem('formData', JSON.stringify(data));

    // console.log(data);
    navigate('/shipping', data)
  }

  React.useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key, parsedData[key]);
      });
    }
  }, [setValue]);

  return (
    <div className='h-[85vh]'>
        <form className='grid place-content-center py-12' onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username"> UserName </label>
            <input className="border-2 border-black mb-2" type="text" id="username" {...register("usename")} />

            <label htmlFor="Emali" id="email"> Email</label>
            <input className="border-2 border-black mb-2" type="text" id="email" {...register("email")} />

            <button>Submit</button>
        </form>
        <DevTool control={control} />
    </div>
  )
}

export default Test
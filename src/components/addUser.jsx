import React, { useState } from 'react'

function AddUser() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

  return (

    <div className=' justify-center'>
        <div className='h-[300px] w-[600px] bg-slate-500 ml-[350px] mt-[150px] rounded-md'>
            <div className=' ml-[10px]'>
                <label htmlFor="Full Name" className='text-white'>Full Name:</label>
                <input type="text" id="FullName" placeholder="enter  your full name eg. Jean Samuel" className='mt-[30px] py-2 px-[180px] ml-[10px] rounded-md'
                onChange={e=> setName(e.target.value)}/>
            </div>
            <div className=' ml-[10px]'>
            <label htmlFor="email" className='text-white'>Email:</label>
                <input type="text" id="email" placeholder="enter your email example@gmail.com" className='mt-[10px] ml-[10px] px-[180px] py-2 rounded-md'
                onChange={e=> setEmail(e.target.value)}/>
            </div>
            <button className="bg-green-500 rounded-md text-white py-2 px-4 mt-[20px] ml-[290px] hover:bg-blue-500">Submit</button>
        </div>

    </div>
  )
}

export default AddUser
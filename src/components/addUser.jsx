import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../features/userReducer';
import { useNavigate } from 'react-router-dom';


function AddUser() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch(addUser({id: users[users.length-1].id +1, name, email, age, gender}))
        navigate("/successful");
    }
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
            <div className=' ml-[10px]'>
            <label htmlFor="age" className='text-white'>Age:</label>
                <input type="number" id="email" placeholder="enter your Age" className='mt-[10px] ml-[10px] px-[180px] py-2 rounded-md'
                onChange={e=> setAge(e.target.value)}/>
            </div>
            <div className=' ml-[10px]'>
            <label htmlFor="gender" className='text-white'>Gender:</label>
                <input type="text" id="email" placeholder="enter your gender" className='mt-[10px] ml-[10px] px-[180px] py-2 rounded-md'
                onChange={e=> setGender(e.target.value)}/>
            </div>
            <button  onClick= {handleSubmit} className="bg-green-500 rounded-md text-white py-2 px-4 mt-[20px] ml-[290px] hover:bg-blue-500">Submit</button>
        </div>

    </div>
  )
}

export default AddUser
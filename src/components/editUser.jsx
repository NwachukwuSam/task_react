import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from '../features/userReducer';



function EditUser() {
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id);
    const {name, email, age, gender} = existingUser[0];

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [updatedName, setUpdatedName] = useState(name);
    const [updatedEmail, setUpdatedEmail] = useState(email);
    const [updatedAge, setUpdatedAge] = useState(age);
    const [updatedGender, setUpdatedGender] = useState(gender);

    const handleEdit = (event) =>{
        event.preventDefault();
        dispatch(editUser({
            id:id,
            name: updatedName,
            email, updatedEmail,
            age: updatedAge,
            gender, updatedGender,
        }))
        navigate('/successful')
    }

  return (
    <div className=' justify-center'>
    <div className='h-[300px] w-[600px] bg-slate-500 ml-[350px] mt-[150px] rounded-md'>
        <div className=' ml-[10px]'>
            <label htmlFor="Full Name" className='text-white'>Full Name:</label>
            <input type="text" id="FullName" placeholder="enter  your full name eg. Jean Samuel" value={updatedName} className='mt-[30px] py-2 px-[180px] ml-[10px] rounded-md'
            onChange={e=> setUpdatedName(e.target.value)}/>
        </div>
        <div className=' ml-[10px]'>
        <label htmlFor="email" className='text-white'>Email:</label>
            <input type="text" id="email" value={updatedEmail} placeholder="enter your email example@gmail.com" className='mt-[10px] ml-[10px] px-[180px] py-2 rounded-md'
            onChange={e=> setUpdatedEmail(e.target.value)}/>
        </div>
        <div className=' ml-[10px]'>
        <label htmlFor="age" className='text-white'>Age:</label>
            <input type="number" id="email" value={updatedAge} placeholder="enter your Age" className='mt-[10px] ml-[10px] px-[180px] py-2 rounded-md'
            onChange={e=> setUpdatedAge(e.target.value)}/>
        </div>
        <div className=' ml-[10px]'>
        <label htmlFor="gender" className='text-white'>Gender:</label>
            <input type="text" id="email" value={updatedGender} placeholder="enter your gender" className='mt-[10px] ml-[10px] px-[180px] py-2 rounded-md'
            onChange={e=> setUpdatedGender(e.target.value)}/>
        </div>
        <button  onClick= {handleEdit} className="bg-green-500 rounded-md text-white py-2 px-4 mt-[20px] ml-[290px] hover:bg-blue-500">Submit</button>
    </div>

</div>
)
  
}

export default EditUser;
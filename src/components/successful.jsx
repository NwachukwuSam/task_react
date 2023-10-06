import { useSelector } from "react-redux";
import React from "react";
import { useNavigate } from "react-router-dom";


function Successful() {
    const users = useSelector((state) => state.users);
    const navigate = useNavigate();
    
    const handleAddUser =() => {
        navigate('/addUser');
    }

    return (
    <div className="h-[500px] pt-[30px] w-full bg-white">
        <h3 className=" text-zinc-950 text-center font-serif font-bold mt-[30px] text-3xl" >
            LOGIN SUCCESSFUL        
        </h3>
        <div className="p-4">
            <button onClick={handleAddUser} className="bg-green-500 rounded-md text-white py-2 px-3 ml-[50px] mt-[50px]"> Add User +</button>
            <table className="w-[800px]  ml-[350px] mt-4 border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 bg-gray-200  border-blue-400 border-2">ID</th>
                        <th className="py-2 px-4 bg-gray-200 border-blue-400 border-2">NAME</th>
                        <th className="py-2 px-4 bg-gray-200 border-blue-400 border-2">Gender</th>
                        <th className="py-2 px-4 bg-gray-200 border-blue-400 border-2">Age</th>
                        <th className="py-2 px-4 bg-gray-200 border-blue-400 border-2">Email</th>
                        <th className="py-2 px-4 bg-gray-200 border-blue-400 border-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index)=>(
                        <tr key={index}>
                            <td className="border-blue-400 border">{user.id}</td>
                            <td className="border-blue-400 border">{user.name}</td>
                            <td className="border-blue-400 border">{user.gender}</td>
                            <td className="border-blue-400 border">{user.age}</td>
                            <td className="border-blue-400 border">{user.email}</td>
                            <td className=" space-x-1">
                                <button className="bg-green-500 rounded-md text-white py-1 px-2">Edit</button>
                                <button className="bg-red-500 rounded-md text-white py-1 px-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div> 
    );
  }
  
  
  export default Successful;
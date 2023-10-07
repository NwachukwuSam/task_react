import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../data/userData";

const userSlice = createSlice ({
    name: "users",
    initialState: userList,
    reducers: {
        addUser:(state, action)=>{
            state.push(action.payload)
        },
        editUser:(state, action) => {
            const {id, name, email, age, gender} = action.payload;
            const userUpdated = state.find(user => user.id == id);
            if(userUpdated){
                userUpdated.name = name;
                userUpdated.email = email;
                userUpdated.age = age;
                userUpdated.gender = gender;
            }
        },
        deleteUser : (state, action) =>{
            const {id} = action.payload;
            const userUpdated = state.find(user => user.id == id);
            if(userUpdated){
                return state.filter(f => f.id !==id);
            }
        }
    }
})

export const {addUser, editUser, deleteUser} = userSlice.actions
export default userSlice.reducer;
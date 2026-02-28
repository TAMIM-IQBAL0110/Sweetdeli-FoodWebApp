import React,{createContext, useState} from 'react'

export const UserContext = createContext()

const UserProvider = ({children})=>{

    // Initialinzing state from localStorage
    const [user,userState] = useState(()=>{
        const storedUser = localStorage.getItem('user')
        return storedUser?JSON.parse(storedUser):null
    })

    // update user
    const updateUser =(userData) =>{
        setUser(userData)
        localStorage.setItem('user',JSON.stringify(userData))
    }

    // clear user
    const clearUser = ()=>{
        setUser(null)
        localStorage.removeItem('user')
    }

    return (
        <UserContext.Provider value = {{user,updateUser,clearUser}}>
            {children}
        </UserContext.Provider>
    )

}
export default UserProvider
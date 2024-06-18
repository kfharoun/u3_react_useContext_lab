import React, { useContext } from 'react'
import UserContext from '../UserContext'

export default function Home() {
    const { userInfo } = useContext(UserContext)
    console.log(userInfo)
    return (
        userInfo.username ? 
            <div>
                <h1>Welcome, {userInfo.username}!</h1>
                <h2>You last logged in: {userInfo.lastLogIn}</h2>
            </div>
         : 
            <div>
                <h1>Hi! Please log in</h1>
            </div>
        
    )
}
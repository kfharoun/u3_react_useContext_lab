import React, { useState, useContext } from "react";
import  UserContext from "../UserContext";


export default function Login() {
  const { userInfo, setUserInfo } = useContext(UserContext);

  const [newUserInfo, setNewUserInfo] = useState({
    username: "",
    password: "", 
    lastLogIn: ''
  })

const updateUser = (e) => {
  e.preventDefault()
  setUserInfo({username: newUserInfo.username , lastLogIn: new Date().toDateString()})
//   console.log(newUserInfo)
  setNewUserInfo({ username: "", password: ""})
}

const handleChange = (e) => {
  setNewUserInfo({ ...newUserInfo, [e.target.name]: e.target.value })
}

const handleLogOut = (e) => {
    setUserInfo({ username: "", password: "", lastLogIn: ""})
}

// console.log(userInfo)

return (
    <div className="login">
      {userInfo.username ? (
        <div>
          <button onClick={handleLogOut}>LogOut</button>
        </div>
      ) : (
        <form onSubmit={updateUser}>
          <input
            name="username"
            placeholder="username"
            type="text"
            value={newUserInfo.username}
            onChange={handleChange}
            required
          />
          <input 
            name="password"
            placeholder="password"
            type="password"
            value={newUserInfo.password}
            onChange={handleChange}
            required
          />
          <button>LogIn</button>
        </form>
      )}
    </div>
  )
    }

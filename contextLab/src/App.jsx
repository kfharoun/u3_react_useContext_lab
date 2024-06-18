import { useState, useContext } from 'react'
import UserContext from './UserContext'
import Header from './components/Header'
import Home from './components/Home'
import './App.css'

function App() {
  const [userInfo, setUserInfo] = useState({
    username: '', 
    lastLogIn: ''
  })

  return (
  <div>
    <UserContext.Provider value={{userInfo, setUserInfo}}>
    <Header />
    <Home />
    </UserContext.Provider>
  </div>
  )
}

export default App

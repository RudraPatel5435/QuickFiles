import React, { useState } from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground'
import Signup from './Components/Logging/Signup'
import Login from './Components/Logging/Login'

const App = () => {

  const [user, setUser] = useState(null)
  const [login, setLogin] = useState(null)

  return (
    <>
    {user ? 
      (
        <div className='w-full h-screen bg-zinc-900'>
          <Background />
          <Foreground user={user} setUser={setUser} setLogin={setLogin} />
        </div>
      ):
      <div className='w-full h-screen bg-zinc-900'>
        {login?
        <Login setUser={setUser} setLogin={setLogin} /> 
        :
        <Signup setUser={setUser} setLogin={setLogin} />
        }
      </div>
      }
      </>
  )
}

export default App
import React, { useState } from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground'
import Login from './Components/Login'

const App = () => {

  const [user, setUser] = useState(null)

  return (
    <>
    {user ? 
      (
        <div className='w-full h-screen bg-zinc-900'>
          <Background />
          <Foreground user={user} setUser={setUser} />
        </div>
      ): 
      <div className='w-full h-screen bg-zinc-900'>
        <Login user={user} setUser={setUser} />
      </div>
      }
      </>
  )
}

export default App
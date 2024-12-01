import React, { useState } from 'react'

const Login = ({setUser, setLogin}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [conpass, setConpass] = useState('')
    const userSignup = (e) => {
        e.preventDefault()
        setUser(false)
        setLogin('login')
        setUsername('')
        setPassword('')
        setConpass('')
    }

  return (
    <div className='h-screen w-full bg-zinc-900 flex flex-col items-center justify-center'>
        <div className="text-slate-700 leading-none text-8xl">Quick Files</div>
        <div className="signup w-[400px] h-[480px] bg-slate-700 rounded-[40px] p-8 mt-16">
            <h3 className='text-center text-5xl text-[#F4E4BA]'>Register</h3>
            <h5 className='text-center mt-1 text-[15px] text-[#F4E4BA]'>Sign up to continue</h5>
            <form className='mt-10 text-xl px-3'>
                <div className="mb-6">
                    <input value={username} onChange={(e)=>{setUsername(e.target.value)}} className="outline-none bg-transparent text-[#C46D5E]" type="text" placeholder='Enter a Username' />
                    <hr style={{borderColor: '#C46D5E'}} />
                </div>
                <div className="mb-6">
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className="outline-none bg-transparent text-[#C46D5E]" type="password" placeholder='Make a Password' />
                    <hr style={{borderColor: '#C46D5E'}} />
                </div>
                <div className="">
                    <input value={conpass} onChange={(e)=>{setConpass(e.target.value)}} className="outline-none bg-transparent text-[#C46D5E]" type="password" placeholder='Confirm Password' />
                    <hr style={{borderColor: '#C46D5E'}} />
                </div>
                <button onClick={(e)=>{userSignup(e)}} className='w-full p-2 rounded-lg text-4xl text-center bg-[#778472] text-white mt-10'>Sign Up</button>
                <div className="mt-10 flex gap-1">
                    <h5 className='text-white text-lg'>Already have an account ?</h5>
                    <h6 onClick={()=>{setLogin(true)}} className='text-[#C46D5E] text-lg underline cursor-pointer'>Log In</h6>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
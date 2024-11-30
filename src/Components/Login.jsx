import React from 'react'

const Login = ({user, setUser}) => {
    const userLogin = () => {
        setUser(true)
    }
  return (
    <div className='h-screen w-full bg-zinc-900 flex items-center justify-center text-[white]'>
        <div className="w-[400px] h-[500px] bg-slate-700 rounded-[40px] p-8">
            <h3 className='text-center text-5xl'>Register</h3>
            <h5 className='text-center mt-1 text-[15px]'>Sign up to continue</h5>
            <form className='mt-10 text-xl px-3'>
                <div className="mb-6">
                    <input className="outline-none bg-transparent text-[#C46D5E]" type="text" placeholder='Username' />
                    <hr style={{borderColor: '#C46D5E'}} />
                </div>
                <div className="mb-6">
                    <input className="outline-none bg-transparent text-[#C46D5E]" type="password" placeholder='Make a Password' />
                    <hr style={{borderColor: '#C46D5E'}} />
                </div>
                <div className="">
                    <input className="outline-none bg-transparent text-[#C46D5E]" type="password" placeholder='Confirm Password' />
                    <hr style={{borderColor: '#C46D5E'}} />
                </div>
                <button onClick={userLogin} className='w-full p-2 rounded-lg text-4xl text-center bg-[#778472] mt-10'>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default Login
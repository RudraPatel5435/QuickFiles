import React, { useState } from 'react'
import { useForm } from "react-hook-form"

const Login = ({setUser, setLogin}) => {

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
      } = useForm()

    const userSignup = async (data) => {
        let r = await fetch("http://localhost:3000/", {method: 'POST', headers: {'Content-Type': 'application/json',}, body: JSON.stringify(data)})
        let res = await r.text()
        setUser(true)
        setLogin(true)
    }

  return (
    <div className='h-screen w-full bg-zinc-900 flex flex-col items-center justify-center'>
        <div className="text-slate-700 leading-none text-8xl">Quick Files</div>
        <div className="signup w-[400px] h-[480px] bg-slate-700 rounded-[40px] p-8 mt-16">
            <h3 className='text-center text-5xl text-[#F4E4BA]'>Register</h3>
            <h5 className='text-center mt-1 text-[15px] text-[#F4E4BA]'>Sign up to continue</h5>
            <form onSubmit={handleSubmit(userSignup)} className='mt-10 text-xl px-3'>
                <div className="mb-6">
                    <input required {...register('username')} className="outline-none bg-transparent text-[#C46D5E]" type="text" placeholder='Enter a Username' />
                    <hr style={{borderColor: '#C46D5E'}} />
                </div>
                <div className="mb-6">
                    <input required {...register('password', {minLength: {value: 8, message: "Minimum length of password is 8."}})} className="outline-none bg-transparent text-[#C46D5E]" type="password" placeholder='Make a Password' />
                    <hr style={{borderColor: '#C46D5E'}} />
                </div>
                <div className="text-red-600 text-sm">
                    {errors.password && <div><span className='text-xl align-top'>*</span>{errors.password.message}</div>}
                </div>
                <input type='submit' value='Sign Up' className='w-full p-2 rounded-lg text-4xl text-center bg-[#778472] text-white mt-10' />
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
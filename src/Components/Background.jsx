import React from 'react'

const Background = () => {
  return (
    <div className='relative w-full h-screen'>
        <div className="w-full py-10 flex justify-center text-zinc-400 text-[2vw] absolute top-[3.5%]">Your Files (draggable)</div>
        <h1 className='text-slate-700 absolute left-1/2 top-1/2 translate-x-[-50%] text-[8vw] leading-none'>Quick Files</h1>
    </div>
  )
}

export default Background
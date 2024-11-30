import React, { useRef, useState } from 'react'
import Card from './Card'

const Foreground = ({user, setUser}) => {
    const ref = useRef(null)
    const userLogOut = () => {
        setUser(false)
    }
    const allFiles = [
        {
            name: 'Bible of JS by Sheryians',
            url: 'Url1',
            size: '2.12 MB'
        },
        {
            name: 'Tutorial 4 PDE_2024',
            url: 'Url2',
            size: '36 KB'
        }
    ]

  return (
    <div>
        <div ref={ref} className='fixed top-0 left-0 z-3 w-full h-full px-10 pb-10 pt-[70px] text-white'>
            <div className="w-full h-10 flex justify-end items-center "><button onClick={userLogOut} className='p-2 mr-[80px] text-3xl border-solid border-2 rounded-lg text-zinc-900 font-extrabold bg-red-600 border-red-600'>Sign Out</button></div>
            <div className="flex flex-wrap gap-10 mt-[30px]">
                {allFiles.map((elem, idx)=>{
                    return <Card key={idx} reference={ref} name={elem.name} url={elem.url} size={elem.size} />
                })}
            </div>
        </div>
    </div>
  )
}

export default Foreground
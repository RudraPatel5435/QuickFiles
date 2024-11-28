import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const ref = useRef(null)

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
    <div ref={ref} className='fixed top-0 left-0 z-3 w-full h-full flex flex-wrap gap-10 px-10 pb-10 pt-[105px]'>
        {allFiles.map((elem, idx)=>{
            return(
                <Card key={idx} reference={ref} name={elem.name} url={elem.url} size={elem.size} />
            )
        })}
    </div>
  )
}

export default Foreground
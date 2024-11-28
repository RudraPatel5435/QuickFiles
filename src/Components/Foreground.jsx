import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const ref = useRef(null)

  return (
    <div ref={ref} className='fixed top-0 left-0 z-3 w-full h-full flex flex-wrap gap-10 p-10'>
        <Card reference={ref} />
        <Card reference={ref} />
        <Card reference={ref} />
        <Card reference={ref} />
    </div>
  )
}

export default Foreground
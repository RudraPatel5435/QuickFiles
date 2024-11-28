import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { IoArrowDownOutline } from "react-icons/io5";
import { motion } from "motion/react"

const Card = ({reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={.3} className='w-60 h-72 bg-zinc-600/90 rounded-[40px] text-white relative p-8 overflow-hidden'>
        <div className="flex justify-between">
        <FaRegFileAlt size='20' />
        <IoMdCloseCircle color='red' size='23' />
        </div>
        <p className='mt-5 font-semibold'>FileName</p>
        <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex justify-between px-8 pb-5">
            <h5>.4MB</h5>
            <span className='w-6 h-6 bg-zinc-300 rounded-full flex items-center justify-center'>
                <IoArrowDownOutline size='20' color='black' />
            </span>
        </div>
        <div className="tag w-full py-3 bg-green-600 text-center">
            <h3 className='text-lg font-semibold'>Download</h3>
        </div>
        </div>
    </motion.div>
  )
}

export default Card
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { IoArrowDownOutline } from "react-icons/io5";
import { motion } from "motion/react"

const Card = ({reference, name, url, size}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={.7} className='w-60 h-72 bg-slate-600/95 rounded-[40px] text-white relative p-8 overflow-hidden'>
        <div className="flex justify-between">
            <FaRegFileAlt size='20' />
            <span className='cursor-pointer text-[#D71709]'><IoMdCloseCircle size='23' /></span>
        </div>
        <p className='mt-5 font-semibold'>{name}</p>
        <div className="footer absolute bottom-0 left-0 w-full">
            <div className="flex justify-between px-8 pb-5">
                <h5>{size}</h5>
                <span className='cursor-pointer w-6 h-6 bg-zinc-300 rounded-full flex items-center justify-center'>
                    <a href=''><IoArrowDownOutline size='20' color='black' /></a>
                </span>
            </div>
            <div className="cursor-pointer tag w-full py-3 bg-[#659B5E] text-center">
                <a href=''><h3 className='text-lg font-semibold'>Download</h3></a>
            </div>
        </div>
    </motion.div>
  )
}

export default Card
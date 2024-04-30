'use client'
import React, { useState } from 'react'

const BestSlide = () => {
    const [active , setActive] = useState(0)
    const list = [
        'https://images.prop24.com/270986117'
    ]
  return (
    <div className="w-full relative rounded-md flex justify-center items-center bg-zinc-100 max-h-[26rem] overflow-hidden ">
        <img
        className=' w-full h-full object-contain'
        src={list[0]} alt="" />
        <div className="flex absolute bottom-6 gap-4  justify-center items-center">
            <div className=" bg-slate-50 border border-slate-600/20 px-4 cursor-pointer size-2 rounded-full"/>
            <div className=" bg-slate-50 border border-slate-600/20 cursor-pointer size-2 rounded-full"/>
            <div className=" bg-slate-50 border border-slate-600/20 cursor-pointer size-2 rounded-full"/>
        </div>
    </div>
  )
}

export default BestSlide
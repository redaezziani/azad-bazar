import React from 'react'


type CardProps = {
    title: string
    description: string
    price: number
    image: string
}

const Card = ({title, description, price, image}: CardProps) => {
  return (
    <div className="w-full flex-col flex justify-start items-start gap-3 overflow-hidden col-span-1  ">
    <div
      className="w-full aspect-square bg-zinc-100 rounded-md overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src="https://di-uploads-pod7.dealerinspire.com/bakermotorcompanyofcharleston/uploads/2022/11/2022-G-SUV-GAL-017-S-FI-DR_900x600.jpg" alt="" />
    </div>
    <div className="flex flex-col gap-3 justify-start items-start mt-2">
      <div className="flex w-full justify-between items-center">
        <h3 className="text-zinc-600">
          G-class 2021
        </h3>
        <span
          className=" flex text-xs text-green-500 justify-start items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} fill={"none"}>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          from 20 min
        </span>
      </div>
      <p className="text-secondary line-clamp-1 text-sm text-slate-400">
        good condition and well maintained car for sale in dhaka city
      </p>
      <p className=" text-slate-500">
        2000 <span className="text-slate-400">$</span>
      </p>
    </div>
  </div> 
  )
}

export default Card
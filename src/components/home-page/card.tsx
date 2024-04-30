import Link from 'next/link';
import React from 'react'
import Link from 'next/link'


type CardProps = {
  price: number;
  discount?: number;
  description: string;
  rating: number;
  name: string;
  image: string;
}

const Card = ({ price, discount, description, rating, name, image }: CardProps) => {
  return (
    <>
    <Link href={'/posts/1'}>
    
    <div className="w-full flex-col flex justify-start items-start gap-3 overflow-hidden col-span-1  ">
      <Link
        href={`/posts/${name}`}
        className="w-full aspect-video bg-zinc-100 rounded-md overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={image} alt="" />
      </Link>
      <div className="flex flex-col gap-3 justify-start items-start mt-2">
        <div className="flex w-full justify-start gap-2 items-center">
          <div className="flex justify-start items-center gap-2">
            <h3 className="text-zinc-900 font-semibold">
              ${price}
            </h3>
            <p className="text-xs text-slate-400">
              /month
            </p>
          </div>
          <div className="px-3 text-white py-0.5 bg-green-500 rounded-full text-xs">
            {discount}% off
          </div>
        </div>
        <p className="text-secondary line-clamp-2 text-sm text-slate-500">
          {description}
        </p>
        <div className="flex  justify-between items-center w-full">
          <div className="flex flex-col gap-1 justify-start items-start">
            <p
              className='text-xs text-slate-500'>
              {name}
            </p>
            <p
            className=' flex justify-start items-center gap-1 '
            >
              {rating} <span className="text-xs text-slate-500">/5</span>
              {" "}
              <svg
              
              xmlns="http://www.w3.org/2000/svg" 
              
              fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 stroke-none h-5 fill-orange-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </p>
          </div>

        </div>
      </div>

    </div>
    </Link>
    </>
  )
}

export default Card
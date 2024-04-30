import React from 'react'


type CardProps = {
  title: string
  description: string
  price: number
  image: string
}

const Card = ({ title, description, price, image }: CardProps) => {
  return (
    <div className="w-full flex-col flex justify-start items-start gap-3 overflow-hidden col-span-1  ">
      <div
        className="w-full aspect-video bg-zinc-100 rounded-md overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://cache.marriott.com/content/dam/marriott-renditions/MLEWH/mlewh-wow-oceanhaven-1800-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*" alt="" />
      </div>
      <div className="flex flex-col gap-3 justify-start items-start mt-2">
        <div className="flex w-full justify-start gap-2 items-center">
          <div className="flex justify-start items-center gap-2">
            <h3 className="text-zinc-900 font-semibold">
              $1895
            </h3>
            <p className="text-xs text-slate-400">
              /month
            </p>
          </div>
          <div className="px-3 text-white py-0.5 bg-green-500 rounded-full text-xs">
            20% off
          </div>
        </div>
        <p className="text-secondary line-clamp-2 text-sm text-slate-500">
          get the best of the best with this amazing hotel room in the heart of maldive island , with a beautiful view of the ocean and the beach
        </p>
        <div className="flex  justify-between items-center w-full">
          <div className="flex flex-col gap-1 justify-start items-start">
            <p
              className='text-xs text-slate-500'>
              Alex Smith
            </p>
            <p
            className=' flex justify-start items-center gap-1 '
            >
              4.5 <span className="text-xs text-slate-500">/5</span>
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
  )
}

export default Card
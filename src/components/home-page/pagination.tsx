import React from 'react'
import { Button } from '../ui/button'

const Pagination = () => {
  return (
    <div className="w-full  flex mt-10 md:justify-between items-center">
          <p
            className=" text-slate-400 hidden text-xs md:block "
          >
            10 products found from 100 products
          </p>
          <div className="flex gap-2 md:justify-start items-center justify-center ">
            <Button
              className="text-xs text-slate-400 size-10 "
              variant={'outline'}
            >
              prev
            </Button>
            <Button
              className="text-sm text-slate-600 size-10 "
              variant={'outline'}
            >
              1
            </Button>
            <Button
              className="text-sm text-slate-400 size-10 "
              variant={'outline'}
            >
              2
            </Button>
            <Button
              className="text-sm text-slate-400 size-10 "
              variant={'outline'}
            >
              3
            </Button>
            <Button
              className="text-xs text-slate-400 size-10 "
              variant={'outline'}
            >
              next
            </Button>
          </div>
        </div>
  )
}

export default Pagination
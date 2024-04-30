import React from 'react'

const Footer = () => {
  return (
    <footer
    className='w-full bg-zinc-100  flex justify-center flex-col items-center gap-4 py-4 px-4 text-zinc-400/90 text-xs'
    >

        <div className='flex  justify-between gap-5 w-full'>
        <div className='flex flex-col gap-2 justify-center items-start'>
            <h3 className=' text-lg  text-black '>About</h3>
            <p>
                About azadBazar group
            </p>
            <p>careers</p>
            <p>
                Contact us
            </p>
        </div>
        <div className='flex flex-col gap-2 justify-center items-start'>
            <h3 className=' text-lg  '>About</h3>
            <p>
                About azadBazar group
            </p>
            <p>careers</p>
            <p>
                Contact us
            </p>
        </div>
        <div className='flex flex-col gap-2 justify-center items-start'>
            <h3 className=' text-lg  '>About</h3>
            <p>
                About azadBazar group
            </p>
            <p>careers</p>
            <p>
                Contact us
            </p>
        </div>
           
        
        </div>
        <div>
        <p>
            © 2024 AzadBazar. All rights reserved.
        </p>
        </div>
       
    </footer>
  )
}

export default Footer
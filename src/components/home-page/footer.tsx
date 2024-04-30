import React from 'react'

const Footer = () => {
  return (
    <footer
    className='w-full bg-zinc-100  flex gap-5 justify-center flex-col items-center  py-4 px-4 text-zinc-400/90 text-xs'
    >

        <div className='flex  justify-around gap-5 w-full'>
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
            <h3 className=' text-lg text-black '>AzadBazar</h3>
            <p>
                Help
            </p>
            <p>
            Privacy Policy
        </p>
        <p>
            Terms of Service
        </p>

        </div>
        <div className='flex flex-col gap-2 justify-center items-start'>
            <h3 className=' text-lg text-black '>Menu</h3>
            <p>
                Home
            </p>
            <p>
                Categories
            </p>
            <p>
                Posts
            </p>

        </div>
        
           
        
        </div>
        <div className='flex  gap-2  justify-center items-center'>
            <h3 className='  text-balance text-black  '>falow us </h3>
            <p>
                Facebook
            </p>
            <p>
                Twitter
            </p>
            <p>
                Instagram
            </p>
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
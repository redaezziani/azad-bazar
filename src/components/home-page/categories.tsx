import React from 'react'
import ListCategory from './list-category'
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { align: 'start', loop: true }

const SLIDES = [
    <div className="flex   justify-start items-center gap-1 flex-col text-xs text-zinc-400/90 cursor-pointer hover:text-primary transition-colors ease-in-out duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={26} height={26} fill={"none"}>
            <path d="M9.06165 4.82633L3.23911 9.92134C2.7398 10.3583 3.07458 11.1343 3.76238 11.1343C4.18259 11.1343 4.52324 11.4489 4.52324 11.8371V15.0806C4.52324 17.871 4.52324 19.2662 5.46176 20.1331C6.40029 21 7.91082 21 10.9319 21H13.0681C16.0892 21 17.5997 21 18.5382 20.1331C19.4768 19.2662 19.4768 17.871 19.4768 15.0806V11.8371C19.4768 11.4489 19.8174 11.1343 20.2376 11.1343C20.9254 11.1343 21.2602 10.3583 20.7609 9.92134L14.9383 4.82633C13.5469 3.60878 12.8512 3 12 3C11.1488 3 10.4531 3.60878 9.06165 4.82633Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 16H12.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p>
            Real Estate
        </p>
    </div>,
    <div className="flex justify-start items-center gap-1 flex-col text-xs text-zinc-400/90 cursor-pointer hover:text-primary transition-colors ease-in-out duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={26} height={26} fill={"none"}>
            <path d="M5 9C5 5.70017 5 4.05025 6.02513 3.02513C7.05025 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 20.9749C5 19.9497 5 18.2998 5 15V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M11 19H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2239 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        <p>
            Mobile Phones
        </p>
    </div>,

    <div className="flex justify-start items-center gap-1 flex-col text-xs text-zinc-400/90 cursor-pointer hover:text-primary transition-colors ease-in-out duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={26} height={26} fill={"none"}>
            <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10 4H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 4H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 20C7.6725 19.9645 6.90036 19.8282 6.42177 19.3045C5.77472 18.5965 5.9693 17.5144 6.35847 15.35L6.96989 11.9497C7.21514 10.5857 7.33777 9.90371 7.69445 9.38625C8.0453 8.87725 8.55358 8.47814 9.15294 8.24104C9.76224 8 10.5082 8 12 8C13.4918 8 14.2378 8 14.8471 8.24104C15.4464 8.47814 15.9547 8.87725 16.3056 9.38625C16.6622 9.90371 16.7849 10.5857 17.0301 11.9497L17.6415 15.35C18.0307 17.5144 18.2253 18.5965 17.5782 19.3045C17.1018 19.8258 16.3345 19.9636 15.018 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12 18V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p>
            Bicle
        </p>
    </div>,

    <div className="flex justify-start items-center gap-1 flex-col text-xs text-zinc-400/90 cursor-pointer hover:text-primary transition-colors ease-in-out duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={26} height={26} fill={"none"}>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 5.73791C14 5.73791 12.8849 6.23808 12.1017 5.85651C11.1464 5.39118 10.1991 3.44619 12.0914 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.00897 9H8M16 9H15.991" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p>
            Kids
        </p>
    </div>,
    <div className="flex justify-start items-center gap-1 flex-col text-xs text-zinc-400/90 cursor-pointer hover:text-primary transition-colors ease-in-out duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={26} height={26} fill={"none"}>
            <path d="M3.5 10C3.5 6.22876 3.5 4.34315 4.7448 3.17157C5.98959 2 7.99306 2 12 2C16.0069 2 18.0104 2 19.2552 3.17157C20.5 4.34315 20.5 6.22876 20.5 10V14C20.5 17.7712 20.5 19.6569 19.2552 20.8284C18.0104 22 16.0069 22 12 22C7.99306 22 5.98959 22 4.7448 20.8284C3.5 19.6569 3.5 17.7712 3.5 14V10Z" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="14.5" r="3.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10 6H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <p>
            Electronic Devices
        </p>
    </div>,
    <div className="flex justify-start items-center gap-1 flex-col text-xs text-zinc-400/90 cursor-pointer hover:text-primary transition-colors ease-in-out duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={26} height={26} fill={"none"}>
            <path d="M16.6127 16.0846C13.9796 17.5677 12.4773 20.6409 12 21.5V8C12.4145 7.25396 13.602 5.11646 15.6317 3.66368C16.4868 3.05167 16.9143 2.74566 17.4572 3.02468C18 3.30371 18 3.91963 18 5.15146V13.9914C18 14.6568 18 14.9895 17.8634 15.2233C17.7267 15.4571 17.3554 15.6663 16.6127 16.0846L16.6127 16.0846Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 7.80556C11.3131 7.08403 9.32175 5.3704 5.98056 4.76958C4.2879 4.4652 3.44157 4.31301 2.72078 4.89633C2 5.47965 2 6.42688 2 8.32133V15.1297C2 16.8619 2 17.728 2.4626 18.2687C2.9252 18.8095 3.94365 18.9926 5.98056 19.3589C7.79633 19.6854 9.21344 20.2057 10.2392 20.7285C11.2484 21.2428 11.753 21.5 12 21.5C12.247 21.5 12.7516 21.2428 13.7608 20.7285C14.7866 20.2057 16.2037 19.6854 18.0194 19.3589C20.0564 18.9926 21.0748 18.8095 21.5374 18.2687C22 17.728 22 16.8619 22 15.1297V8.32133C22 6.42688 22 5.47965 21.2792 4.89633C20.5584 4.31301 19 4.76958 18 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p>
            Hobies
        </p>
    </div>,
    <div className="flex justify-start items-center gap-1 flex-col text-xs text-zinc-400/90 cursor-pointer hover:text-primary transition-colors ease-in-out duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={26} height={26} fill={"none"}>
            <path d="M17.0032 2.55556L14.5016 2C14.0013 3 13.0006 3.5 12 3.5C10.9994 3.5 9.99871 3 9.49839 2L6.99678 2.55556M17.0032 2.55556L17.4345 2.65134C18.442 2.87509 19.3482 3.4731 19.7132 4.43787C20.3752 6.18796 20.9185 8.98395 20.9962 12.9991C21.0053 13.4665 21.0098 13.7002 20.8627 13.8501C20.7156 14 20.4788 14 20.0052 14H17.966M17.0032 2.55556C17.0032 4.86557 17.2187 8.87061 17.966 14M17.966 14C18.1099 14.9879 18.3937 16.6177 18.6283 17.9295C18.8053 18.9196 18.8938 19.4146 18.5583 20.0311C18.2227 20.6476 17.8839 20.7899 17.2062 21.0744C16.0771 21.5484 14.3775 22 12 22C9.62254 22 7.92293 21.5484 6.79378 21.0744C6.11609 20.7899 5.77725 20.6476 5.44171 20.0311C5.10617 19.4146 5.19469 18.9196 5.37173 17.9295C5.60631 16.6177 5.89007 14.9879 6.034 14M6.99678 2.55556L6.56545 2.65134C5.55795 2.87509 4.6518 3.4731 4.28683 4.43787C3.62477 6.18796 3.08153 8.98395 3.00375 12.9991C2.9947 13.4665 2.99017 13.7002 3.13728 13.8501C3.28438 14 3.5212 14 3.99484 14H6.034M6.99678 2.55556C6.99678 4.86557 6.78127 8.87061 6.034 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.031 3C13.884 6.47826 14.1192 13.7478 18 15M9.96919 3C10.1162 6.47826 9.88048 13.7478 6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p>
            Fashion
        </p>
    </div>
]

function Categories() {
    return (
        <div
        className=' w-full md:max-w-4xl'
        >
            <ListCategory slides={SLIDES} options={OPTIONS} />

        </div>
    )
}

export default Categories
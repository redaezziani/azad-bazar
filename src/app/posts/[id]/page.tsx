import React from 'react'
import ListCardGrid from '@/components/home-page/list-grid'
import { Button } from '@/components/ui/button';

const page = ({ ...params }) => {
  const posts = [
    {
      id: 1,
      price: 29.99,
      discount: 10,
      description: "Experience the breathtaking landscapes of New Zealand with our guided tours.",
      rating: 4.8,
      name: "New Zealand Adventure Tour",
      image: "https://cdn.gap360.com/tpl/lib/img/private/media/hobbiton-group.jpg?"
    },
    {
      id: 2,
      price: 19.95,
      description: "Learn the art of French cuisine with our expert chefs in the heart of Paris.",
      rating: 4.5,
      name: "French Cooking Class",
      image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/7f/ff/79.jpg"
    },
    {
      id: 3,
      price: 99.99,
      discount: 20,
      description: "Explore the wonders of the Great Barrier Reef with our scuba diving packages.",
      rating: 4.9,
      name: "Great Barrier Reef Diving Experience",
      image: "https://tropicalnorthqueensland.org.au/wp-content/uploads/Diving-on-the-Great-Barrier-Reef-TEQ.jpg"
    },
    {
      id: 4,
      price: 49.99,
      description: "Discover the rich history and culture of Rome with our expert-guided tours.",
      rating: 4.7,
      name: "Rome Historical Tour",
      image: "https://i0.wp.com/www.carpediemtours.com/wp-content/uploads/2021/11/Tipsy-Tour-Cover-Photo-with-Colosseum-in-background-1.jpg?fit=1920%2C1280&ssl=1"
    },
    {
      id: 5,
      price: 39.95,
      discount: 15,
      description: "Embark on an unforgettable safari adventure in the heart of Africa.",
      rating: 4.6,
      name: "African Safari Expedition",
      image: "https://www.africasafaris-tours.com/wp-content/uploads/2023/05/12-Days-South-African-Luxury-Safari-Expedition-e1685268977865.jpg"
    },
    {
      id: 6,
      price: 79.99,
      discount: 30,
      description: "Sail the crystal-clear waters of the Caribbean on our luxury yacht cruises.",
      rating: 4.8,
      name: "Caribbean Yacht Adventure",
      image: "https://worldyachtgroup.com/wp-content/uploads/2017/11/At-Last-yacht-caribbean.jpg"
    },

  ];

  const post = posts.find(post => post.id == params.params.id)
  return (
    <div className=' w-full px-3 md:px-0  mt-6 flex flex-col justify-center  gap-10 '>
      <h2
      className='text-xl font-semibold text-zinc-800 capitalize'
      >
        Post Details 
      </h2>
      {post && (
    <div className=' w-full   flex justify-start items-start flex-wrap  gap-3 md:gap-10' >
        <div className=' flex flex-col    md:w-[45%]   justify-start items-start gap-3 '>
          <div className='w-full '>
            <img
              className=" w-full aspect-video object-cover rounded-md"
              src={post?.image} alt="" />
          </div>
          <h3 className='text-lg font-semibold text-zinc-900 capitalize'>
            {post?.name}
          </h3>
          <div
            className='flex  justify-between items-center gap-2 w-full'
          >
            <h3 className=' text-sky-500 font-semibold '>
              ${post?.price}
            </h3>
            <span
              className='flex justify-start items-center gap-1 text-sm  '
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                <path d="M13.1977 8H10.8023C7.35836 8 5.03641 11.5806 6.39304 14.7994C6.58202 15.2477 7.0156 15.5385 7.49535 15.5385H8.33892C8.62326 15.5385 8.87111 15.7352 8.94007 16.0157L10.0261 20.4328C10.2525 21.3539 11.0663 22 12 22C12.9337 22 13.7475 21.3539 13.9739 20.4328L15.0599 16.0157C15.1289 15.7352 15.3767 15.5385 15.6611 15.5385H16.5047C16.9844 15.5385 17.418 15.2477 17.607 14.7994C18.9636 11.5806 16.6416 8 13.1977 8Z" stroke="currentColor" stroke-width="1.5" />
                <circle cx="12" cy="5" r="3" stroke="currentColor" stroke-width="1.5" />
              </svg>
              {post?.rating}
            </span>
          </div>
          <div className='flex flex-col gap-3 justify-start items-start'>
            <h3
              className='text-slate-500 text-xl line-clamp-3'
            >
              discription
            </h3>
            <p
              className='text-slate-500 text-sm '
            >
              {post?.description}
            </p>
          </div>
        </div>
        <div className='flex  md:w-[45%]  justify-start items-start  flex-col  gap-3 md:gap-10 w-full  '>
          <div className=' bg-slate-100   flex flex-col gap-10  w-full  rounded-md px-3 py-4' >
            <div className=' flex gap-2 items-start justify-between'>
              <div className='flex gap-2 items-end justify-center'>
                <img
                  className=" h-14 w-14 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className='flex  flex-col gap-1'>
                  <span className='text-slate-800'>Alex Smith</span>
                  <span
                    className='flex justify-start items-center gap-1 text-sm  '
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                      <path d="M13.1977 8H10.8023C7.35836 8 5.03641 11.5806 6.39304 14.7994C6.58202 15.2477 7.0156 15.5385 7.49535 15.5385H8.33892C8.62326 15.5385 8.87111 15.7352 8.94007 16.0157L10.0261 20.4328C10.2525 21.3539 11.0663 22 12 22C12.9337 22 13.7475 21.3539 13.9739 20.4328L15.0599 16.0157C15.1289 15.7352 15.3767 15.5385 15.6611 15.5385H16.5047C16.9844 15.5385 17.418 15.2477 17.607 14.7994C18.9636 11.5806 16.6416 8 13.1977 8Z" stroke="currentColor" stroke-width="1.5" />
                      <circle cx="12" cy="5" r="3" stroke="currentColor" stroke-width="1.5" />
                    </svg>
                    kabul
                  </span>
                </div>
              </div>
              <div>
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
            <Button
              variant={'outline'}
              className='w-full flex justify-center items-center gap-2  '
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20}  fill={"none"}>
                <path d="M5 9C5 5.70017 5 4.05025 6.02513 3.02513C7.05025 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 20.9749C5 19.9497 5 18.2998 5 15V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M11 19H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2239 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              contact owner
            </Button>
            <div>
              <p
                className='text-xs text-slate-500'
              >
                active since 2024
              </p>
            </div>
          </div>
          <div className='bg-slate-100   flex flex-col  gap-5  w-full   rounded-md px-3 py-4 '>
            <div className='flex gap-10  w-full'>
              <p className='flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                  <path d="M20.3927 8.03168L18.6457 6.51461C17.3871 5.42153 16.8937 4.83352 16.2121 5.04139C15.3622 5.30059 15.642 6.93609 15.642 7.48824C14.3206 7.48824 12.9468 7.38661 11.6443 7.59836C7.34453 8.29742 6 11.3566 6 14.6525C7.21697 13.9065 8.43274 13.0746 9.8954 12.7289C11.7212 12.2973 13.7603 12.5032 15.642 12.5032C15.642 13.0554 15.3622 14.6909 16.2121 14.9501C16.9844 15.1856 17.3871 14.5699 18.6457 13.4769L20.3927 11.9598C21.4642 11.0293 22 10.564 22 9.99574C22 9.4275 21.4642 8.96223 20.3927 8.03168Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10.5676 3C6.70735 3.00694 4.68594 3.10152 3.39411 4.39073C2 5.78202 2 8.02125 2 12.4997C2 16.9782 2 19.2174 3.3941 20.6087C4.78821 22 7.03198 22 11.5195 22C16.0071 22 18.2509 22 19.645 20.6087C20.6156 19.64 20.9104 18.2603 21 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                share
              </p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                </svg>
              </p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                  <path d="M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 17.647 3.5 18.3488 2 18.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                </svg>
              </p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                  <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                  <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5" />
                  <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                  <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                  <path d="M10.5359 11.0075C9.71585 10.8916 7.84666 11.0834 6.93011 12.7782C6.01355 14.4729 6.9373 16.2368 7.51374 16.9069C8.08298 17.5338 9.89226 18.721 11.8114 17.5619C12.2871 17.2746 12.8797 17.0603 13.552 14.8153L13.4738 5.98145C13.3441 6.95419 14.4186 9.23575 17.478 9.5057" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </p>
            </div>
            <div>
              <p
                className='flex gap-2'
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                  <path d="M2 12C2 7.52166 2 5.28249 3.39124 3.89124C4.78249 2.5 7.02166 2.5 11.5 2.5C15.9783 2.5 18.2175 2.5 19.6088 3.89124C21 5.28249 21 7.52166 21 12C21 16.4783 21 18.7175 19.6088 20.1088C18.2175 21.5 15.9783 21.5 11.5 21.5C7.02166 21.5 4.78249 21.5 3.39124 20.1088C2 18.7175 2 16.4783 2 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                  <path d="M12.3638 7.72209L13.2437 9.49644C13.3637 9.74344 13.6837 9.98035 13.9536 10.0257L15.5485 10.2929C16.5684 10.4643 16.8083 11.2103 16.0734 11.9462L14.8335 13.1964C14.6236 13.4081 14.5086 13.8164 14.5736 14.1087L14.9285 15.6562C15.2085 16.8812 14.5636 17.355 13.4887 16.7148L11.9939 15.8226C11.7239 15.6613 11.2789 15.6613 11.004 15.8226L9.50913 16.7148C8.43925 17.355 7.78932 16.8761 8.06929 15.6562L8.42425 14.1087C8.48925 13.8164 8.37426 13.4081 8.16428 13.1964L6.92442 11.9462C6.1945 11.2103 6.42947 10.4643 7.44936 10.2929L9.04419 10.0257C9.30916 9.98035 9.62912 9.74344 9.74911 9.49644L10.629 7.72209C11.109 6.7593 11.8889 6.7593 12.3638 7.72209Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                rate this post
              </p>
              <div>

              </div>

            </div>
          </div>
        </div>
      </div>
      )}
      <div className=''>
        <h3
          className='text-lg text-slate-800 font-semibold'
        >
          similar posts
        </h3>
        <ListCardGrid />
      </div>
    </div>
  )
}

export default page
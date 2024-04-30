'use client';

import React, {ReactNode}from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'


type PropType = {
  slides: ReactNode[]
  options?: EmblaOptionsType
}

const ListCategory: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <section className="embla  w-full">
      <div className="embla__viewport"  ref={emblaRef} >
        <div className="embla__container">
         
           {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              {slide}
            </div>
          ))}
          
        </div>
      </div>
    </section>
  )
}

export default ListCategory
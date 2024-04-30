'use client';

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'


type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const ListCategory: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <section className="embla w-full">
      <div className="embla__viewport"  ref={emblaRef} >
        <div className="embla__container">
         
        {slides.map((index) => (
            <div className="embla__slide border border-black" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  )
}

export default ListCategory
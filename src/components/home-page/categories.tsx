import React from 'react'
import ListCategory from './list-category'
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { align: 'start', loop: true }
const SLIDE_DATA= 10
const SLIDES = Array.from(Array(SLIDE_DATA).keys())

function Categories() {
  return (
    <div>
        <ListCategory  slides={SLIDES} options={OPTIONS}  />

    </div>
  )
}

export default Categories
import React from 'react'
import Details from './Components/Description Components/Details'
import { Footer } from './Components/NavandFoot Components/Footer'
import Navbar from './Components/NavandFoot Components/Navbar'

export const Description = () => {
  return (
    <div className='Description'>
      <Navbar />
      <Details />
      <Footer/>
    </div>
  )
}


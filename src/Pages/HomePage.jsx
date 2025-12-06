import React from 'react'
import Hero from '../Components/Hero/Hero'
import TopRated from '../Components/TopRated/TopRated'
import Hero2 from '../Components/Hero2/Hero2'
import HighlyRecommended from '../Components/HighlyRecommended/HighlyRecommended'

const HomePage = (props) => {
  return (
    <>
    <Hero/>
    <TopRated />
    <Hero2 />
    <HighlyRecommended />
    </>
  )
}

export default HomePage
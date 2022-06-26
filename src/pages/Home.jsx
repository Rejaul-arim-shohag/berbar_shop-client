import React, {Fragment} from 'react'
import HeroSection from '../components/HeroSaction/HeroSection'
import Mentor from '../components/Mentor/Mentor'
import Models from '../components/Models/Models'
import Services from '../components/Services/Services'
export default function Home() {
  return (
    <Fragment>
        <HeroSection/>
        <Services/>
        <Models/>
        <Mentor/>
    </Fragment>
  )
}

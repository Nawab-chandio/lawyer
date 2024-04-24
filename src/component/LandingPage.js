import React from 'react'
import Navbar from './Navbar'
import MainBody from './MainBody'
import CaseStudies from './CaseStudies'
import Expereince from './Expereince'
import MainTeam from '../our-team/MainTeam'

function LandingPage() {
  return (
    <div>
    <Navbar />
    <MainBody />
    <Expereince />
    <CaseStudies />
    <MainTeam />
    </div>
  )
}

export default LandingPage
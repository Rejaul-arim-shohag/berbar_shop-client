import React from 'react'
import Footer from '../Footer/Footer'
import HomePageLayout from '../Layout/HomePageLayout'
import PolicyCard from './PolicyCard'

export default function PrivacyPolicy() {
  return (
    <>
      <HomePageLayout title="Privacy Policy" >
        <div><PolicyCard /></div>
      </HomePageLayout>
      <Footer />
    </>

  )
}

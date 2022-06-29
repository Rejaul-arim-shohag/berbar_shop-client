import React from 'react'
import Footer from '../Footer/Footer'
import HomePageLayout from '../Layout/HomePageLayout'
import PolicyCard from './PolicyCard'

export default function TermsConditions() {
  return (
    <>
      <HomePageLayout title="Terms & Conditions" >
        <div><PolicyCard /></div>
      </HomePageLayout>
      <Footer />
    </>

  )
}

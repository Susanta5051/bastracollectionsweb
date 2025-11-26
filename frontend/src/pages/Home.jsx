import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'
import BestSeller from '../components/BestSeller'
import Policy from '../components/Policy'
import NewsletterBox from '../components/NewsLetterBox.jsx'

const Home = () => {
  return (
    <div>
        <Hero />
        <LatestCollections />
        <BestSeller />
        <Policy />
        <NewsletterBox/>
    </div>
  )
}
 
export default Home



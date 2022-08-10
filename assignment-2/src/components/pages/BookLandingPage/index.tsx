import React from 'react'
import BannerImage from '../../atoms/BannerImage'
import SearchBar from '../../molecules/SearchBar'
import Footer from '../../organisms/Footer'
import Header from '../../organisms/Header'

const BookLandingPage = () => {
  return (
    <div>
        <Header />
        <BannerImage />
        <SearchBar />
        <Footer />

    </div>
  )
}

export default BookLandingPage
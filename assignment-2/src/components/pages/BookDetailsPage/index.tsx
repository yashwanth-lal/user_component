import React from 'react'
import BookDetails from '../../organisms/BookDetails'
import BookGrid from '../../organisms/BooksInGrid'
import Footer from '../../organisms/Footer'
import Header from '../../organisms/Header'



const BookDetailsPage = () => {
  return (
    <div>
        <Header />
        <BookDetails />
        <BookGrid books={[]}/>
        <Footer />
    </div>
  )
}

export default BookDetailsPage
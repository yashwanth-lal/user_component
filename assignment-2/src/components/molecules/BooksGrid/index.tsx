import { Card, CardMedia, Typography } from '@mui/material'
import React from 'react'
import ProgressBar from '../../atoms/ProgressBar'
import IconText from '../../atoms/IconText'

interface BookData {
  id: string
  img: string
  title: string
  author: string
  reads: string
}

interface Props {
  bookData: BookData
}

const BooksGrid = ({bookData}: Props) => {
  return (
    <div>
      <Card>
        <CardMedia>
          <img src={bookData.img} />
        </CardMedia>

        <Typography>{bookData.title}</Typography>
        <Typography>{bookData.author}</Typography>
        <IconText />
        
        <ProgressBar />
      </Card>
    </div>
  )
}

export default BooksGrid
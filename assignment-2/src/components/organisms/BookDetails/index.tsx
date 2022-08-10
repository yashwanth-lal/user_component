import { Grid, Typography } from "@mui/material";
import React from "react";
import BookImage from "../../atoms/BookImage";
import Tabs from "../../molecules/Tabs";

interface BookData {
  id?: string;
  img?: string;
  title?: string;
  author?: string;
  reads?: string;
}

interface Props {
  book?: BookData;
}

const BookDetails = ({book}: Props) => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <Typography>{book.title}</Typography>
          <Typography>Book tagline</Typography>
          <Typography>Author</Typography>
          {/* TypoWithIcon */}
          {/* Buttons in the grid */}
          <Tabs />
        </Grid>
        <Grid item>
          <BookImage img={book.img}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default BookDetails;
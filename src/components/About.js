import { Box, Typography } from '@mui/material'
import React from 'react'


const About = () => {
  return (

    <div>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Typography sx={{fontFamily:"fantasy"}} variant='h2'>About Us</Typography>

<Typography variant='h5' sx={{width:'900px',marginTop:10}}>Bookstore is the best equipped 'base-camp' for journeys of the mind offering its customers the widest range of outstanding titles and consistently courteous and informed service for more than a century.
Today ,with stores in major metros, India's first of its kind tea boutique, Cha Bar, India's only bookstore to curate multiple literary Festival, Bookstore offers booklovers access to the very best in publishing enhanced by a variety of events which salute books,visual & performing arts and celebrate the word.
Bookstore as an idea to help support bookstores and thier communities as more and more people are buying thier books online.

<p style={{fontWeight:'bold',marginTop:'15px',fontFamily:'Lobster'}}>We offer a tremendous gathering of books in the various classification of Fiction, Non-fiction, Biographies, History,Religions ,Self-Help, and Children.</p> 
</Typography>

      </Box>
    </div>
    
  )
}

export default About

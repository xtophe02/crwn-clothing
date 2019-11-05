import React from 'react'
import {Typography, Container} from '@material-ui/core';
import {ShopProvider} from '../context/ShopProvider'
import {Hats, Sneakers, Jackets, Womens, Mens} from '../components/Preview'

const shop = () => {
  return (
    
    <ShopProvider>
      <Container>
      <Typography variant="h4" gutterBottom>
        Collections
      </Typography>
      <Hats />
      <br/>
      <Sneakers />
      <br/>
      <Jackets />
      <br/>
      <Womens />
      <br/>
      <Mens />
      </Container>
    </ShopProvider>
    
  )
}

export default shop

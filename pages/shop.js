import React from 'react'
import Typography from '@material-ui/core/Typography';
import {ShopProvider} from '../context/ShopProvider'
import {Hats, Sneakers, Jackets, Womens, Mens} from '../components/Preview'

const shop = () => {
  return (
    
    <ShopProvider>
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
    </ShopProvider>
    
  )
}

export default shop

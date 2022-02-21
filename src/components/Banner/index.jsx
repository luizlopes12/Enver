import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Texts,
  Button,
  Images,
  GuyImage,
} from './style'
const Banner = () => {
  return (
    <Container>
        <Texts>
          <h1>Build Your Awesome Platform</h1>
          <p>
            Enver studio is a digital studio that 
            offers several services such as UI/UX Design to developers, 
            we will provide the best service for those of you who use our services.
            </p>
            <Button>
              <Link to='/'>Our Services 
              <img src={require('../../img/arrow-icon.svg').default} alt="Arrow icon" />
              </Link>
            </Button>
        </Texts>
        <Images>
          <GuyImage src={require('../../img/guy.svg').default} alt="Guy Image" />
        </Images>
    </Container>
  )
}

export default Banner
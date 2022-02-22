import React from 'react'
import {Container, CardImage} from './style'
const Card = ({img}) => {
  return (
    <Container>
        <CardImage src={img}></CardImage>
    </Container>
  )
}

export default Card
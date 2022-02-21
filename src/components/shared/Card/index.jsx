import React from 'react'
import {
    Container,
    CardImage,
    CardTitle,
    CardDesc
} from './style'
const Card = ({cardImage, cardTitle, cardDesc}) => {
  return (
    <Container>
        <CardImage src={cardImage}/>
        <CardTitle>{cardTitle}</CardTitle>
        <CardDesc>{cardDesc}</CardDesc>
    </Container>
  )
}

export default Card
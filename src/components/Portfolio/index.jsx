import React from 'react'
import {
    Container,
    Title,
    Cards
} from './style'
import Card from '../shared/PortfolioCard'
const Portfolio = () => {
  return (
    <Container>
        <Title>Our Awesome Portofolio</Title>
        <Cards>
            <Card/>
            <Card/>
            <Card/>
        </Cards>
    </Container>
  )
}

export default Portfolio
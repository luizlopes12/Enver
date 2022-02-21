import React from 'react'
import { 
  Container, 
  Title, 
  Cards,
  } from './style'
  import Card from  '../shared/Card'
const Services = () => {
  return (
    <Container>
      <Title>The Service We Provide For You</Title>
      <Cards>
        <Card>
          <CardImage src={require('../../img/dev-icon.svg').default} alt="Dev card" />
          <CardTitle>Development</CardTitle>
          <CardDesc>Create a platform with the best and coolest quality from us.</CardDesc>
        </Card>
      </Cards>
    </Container>
  )
}

export default Services
import React from 'react'
import { 
  Container, 
  Title, 
  Cards
  } from './style'
import Card from  '../shared/Card'
const Services = () => {
  return (
    <Container>
      <Title>The Service We Provide For You</Title>
      <Cards>
        <Card 
          cardImage={require('../../img/dev-icon.svg').default} 
          cardTitle='Development'
          cardDesc='Create a platform with the best and coolest quality from us.'
        />
        <Card 
          cardImage={require('../../img/ux-icon.svg').default} 
          cardTitle='UI/UX Designer'
          cardDesc='We provide UI/UX Design services, and of course with the best quality.'
        />
        <Card 
          cardImage={require('../../img/graphic-icon.svg').default} 
          cardTitle='Graphik Designer'
          cardDesc='We provide Graphic Design services, with the best designers'
        />
        <Card 
          cardImage={require('../../img/motion-icon.svg').default} 
          cardTitle='Motion Graphik'
          cardDesc='Create a platform with the best and coolest quality from us.'
        />
        <Card 
          cardImage={require('../../img/photo-icon.svg').default} 
          cardTitle='Photography'
          cardDesc='We provide Photography services, and of course with the best quality'
        />
        <Card 
          cardImage={require('../../img/video-icon.svg').default} 
          cardTitle='Videography'
          cardDesc='Create a platform with the best and coolest quality from us.'
        />
      </Cards>
    </Container>
  )
}

export default Services
import React from 'react'
import {Link} from 'react-router-dom'
import {
    Container,
    Section,
    List,
    Logo,
    Links,
    Copy
} from './style'
const Footer = () => {
  return (
    <Container>
        <Section>
            <List>
                <Logo>
                <img src={require('../../img/logo.svg').default} alt="Logo" />
                <span>Enver</span>
                </Logo>
                <Links>
                <Link to='/'>Support</Link>
                <Link to='/'>Privacy Policy</Link>
                <Link to='/'>Terms and Conditions</Link>
                </Links>
                <Copy>© 2020 Enver, All Rights Reserved</Copy>
            </List>
        </Section>
    </Container>
  )
}

export default Footer
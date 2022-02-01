import React from "react";
import { Container } from "../../styles/Container";
import {Navbar} from './style'
const Header = () => {
    const handleClick = () =>{
        let nav = document.querySelector('#nav')
        nav.classList.contains('menu-closed')?
        nav.classList.add('menu-open')
        :
        nav.classList.add('menu-closed')
    }
    return (
        <Container>
            
        </Container>
    );
}

export default Header;
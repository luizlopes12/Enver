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
        <Navbar>
            <div>
                <img src={require('../../img/logo.svg').default}/>
                <span>Enver</span>
            </div>
            <nav className="menu-closed" id="nav">
                <i>opa</i>
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Our Project</a>
                <a href="#">About us</a>
                <button>Contact us</button>
            </nav>
            <img src={require('../../img/menu-icon.svg').default} onClick={handleClick}/>
        </Navbar>
        </Container>
    );
}

export default Header;
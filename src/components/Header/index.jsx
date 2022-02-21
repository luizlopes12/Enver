import React from "react";
import { Container } from "../../global/Container";
import { Link } from "react-router-dom";
import { Navbar } from './style'
const Header = () => {
    const handleClick = () =>{
        let nav = document.querySelector('#nav')
        nav.classList.contains('nav-opened') ?
        nav.classList.remove('nav-opened')
        :
        nav.classList.add('nav-opened')
    }
    return (
        <Container>
            <Navbar>
                <div>
                    <img src={require('../../img/logo.svg').default} alt="Logo" />
                    <span>Enver</span>
                </div>
                    <i><img src={require('../../img/menu-icon.svg').default} onClick={handleClick} className='icon-open' alt="Menu icon" /></i>
                <nav id="nav" className="nav-closed">
                    <i><img src={require('../../img/close-menu-icon.svg').default} onClick={handleClick}  className='icon-close' alt="Menu icon" /></i>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Services</Link></li>
                        <li><Link to='/'>Our Project</Link></li>
                        <li><Link to='/'>About us</Link></li>
                    </ul>
                    <button>Contact us</button>
                </nav>
            </Navbar>
        </Container>
    );
}

export default Header;
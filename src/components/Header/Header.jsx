import React from "react";
import { Container } from "../../styles/Container";
import {Navbar} from './style'
const Header = () => {
    return (
        <Container>
        <Navbar>
            <div>
                <img src={require('../../img/logo.svg').default}/>
                <span>Enver</span>
            </div>
            <div>
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Our Project</a>
                <a href="#">About us</a>
            </div>
            <div>
                <button>Contact us</button>
            </div>
        </Navbar>
        </Container>
    );
}

export default Header;
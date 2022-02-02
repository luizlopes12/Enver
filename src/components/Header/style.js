import styled from "styled-components";

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin: 25px;
    div, nav{
        display: flex;
        align-items: center;
        span{
            font-size: 1.6em;
            margin: 0 5px;
            font-weight: 600;
        }
    }
    .icon-open{
        display: none;
    }
    .icon-close{
        filter: invert(100);
        height: 20px;
        display: none;
    }
    ul{
        list-style: none;
        display: flex;
        li{
            margin: 0 10px;
            a{
                text-decoration: none;
                color: rgba(255,255,255, .7);
            }
        }
    }
    button{
        background-color: transparent;
        color: #FFF;
        font-size: 1em;
        border: 1px solid #FFF;
        border-radius: 5px;
        padding: 10px 15px;
        margin: 0 0 0 10vw;
    }


    @media screen and (max-width: 768px){
        nav{
            position: absolute;
            top: 0;
            display: flex;
            flex-direction: column;
            height: 100vh;
            width: 100vw;
            align-items: center;
            background-color: #000;
            transition: all .2s linear;
            ul{
                display: flex;
                flex-direction: column;
                margin-top: 100px;
                text-align: center;
                li{
                    margin: 20px;
                }
            }
            button{
                margin: 10px 0;
            }
        }
        .nav-closed{
            left: 100vw;
        }
        .nav-opened{
            left: 0;
        }
        .icon-open{
            display: initial;
        }
        .icon-close{
            position: absolute;
            top: 5vh;
            right: 5vw;
            display: initial;
        }
    }

`;
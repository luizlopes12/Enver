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
            z-index: 9999;
            font-size: 1.6em;
            margin: 0 5px;
            font-weight: 600;
            cursor: pointer;
        }
        img{
            z-index: 9999;
            cursor: pointer;
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
                transition: all .2s ease-in-out;
                &:hover{
                color: #fffffff3;
                }
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
        cursor: pointer;
        transition: all .2s ease-in-out;
        &:hover{
            background-color: #fffffff3;
            color: #19191B;
        }
    }


    @media screen and (max-width: 768px){
        div, nav{
        span{
            font-size: 1.3em;
            margin: 0 5px;
            font-weight: 600;
            cursor: pointer;
        }
        img{
            height: 35px;
            cursor: pointer;
        }
    }
        nav{
            position: absolute;
            top: 0;
            display: flex;
            flex-direction: column;
            height: 100vh;
            width: 100vw;
            align-items: center;
            background-color: #000;
            transition: all .2s ease-in-out;
            ul{
                display: flex;
                flex-direction: column;
                margin-top: 110px;
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
            position: fixed;
            transform: translateX(100%);
            visibility: hidden;
            opacity: 0;
        }
        .nav-opened{
            transform: translateX(-10%);
            position: fixed;
            visibility: visible;
            opacity: 100%;
        }
        .icon-open{
            display: initial;
            position: fixed;
            top: 7vh;
            right: 8.5vw;
        }
        .icon-close{
            position: fixed;
            top: 7vh;
            right: 8.5vw;
            display: initial;
        }
    }

`;
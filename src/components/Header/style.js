import styled from "styled-components";
/* 
//////////////////////
    Main container
/////////////////////
*/
export const Container = styled.section`
    width: 85%;
    margin: auto;
    color: #FFF;
    @media(max-width: 768px){
        width: 90%;
    }
    @media(max-width: 375px){
        width: 95%;
    }
    a:hover{
        color: #fffffff3;
    }
`;
/* 
//////////////////////
    Navbar container
/////////////////////
*/
export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin: 25px 25px 0 0;
    div, nav{
        display: flex;
        align-items: center;
        span{
            font-size: 1.6em;
            margin: 0 5px;
            font-weight: 600;
            cursor: pointer;
        }
        img{
            margin-right: 5px;
            cursor: pointer;
        }
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
    .icon-open{
        display: none;
    }
    .icon-close{
        filter: invert(100);
        height: 20px;
        display: none;
    }
    
    @media screen and (max-width: 900px){
    div, nav{
        span{
            font-size: 1.2em;
            margin: 0 5px;
            font-weight: 600;
            cursor: pointer;
        }
        img{
            margin-left: 8px;
            height: 30px;
            cursor: pointer;
        }
    }
    nav{
        z-index: 999;
        overflow: hidden;
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
        transform: translateX(-2%);
        position: fixed;
        visibility: visible;
        opacity: 100%;
        width: 100%;
        @media screen and (min-width: 425px){
            transform: translateX(-5%);
        }
    }
    .icon-open{
        display: initial;
        position: absolute;
        top: 7vh;
        right: 8.5vw;
    }
    .icon-close{
        display: initial;
        position: absolute;
        top: 7vh;
        right: 8.5vw;
    }
    }

`;
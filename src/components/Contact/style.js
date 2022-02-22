import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    background-color: #1E1E20;
    padding: 10px 0;
    div{
    width: 85%;    
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    margin: 50px auto;
    padding: 60px 0;
    background-image: 
    url(${require('../../img/add-icon.svg').default}),
    url(${require('../../img/circle-icon.svg').default})
    ;
    background-repeat: no-repeat, no-repeat;
    background-position: right top, left bottom;
    background-size: 30px, 40px;
    @media screen and (max-width: 768px){
        margin: 20px auto;
        display: block;
        padding-bottom: 50px;
        max-width: 90%;
        background-size: 30px, 30px;
    }

    }

`;

export const Title = styled.h3`
    font-size:  50px;
    width: 50%;
    line-height: 50px;
    text-align: start;
    @media screen and (max-width: 768px){
        margin-bottom: 20px;
        width: 60%;
        line-height: 30px;

        font-size: 40px;
    }
    @media screen and (max-width: 425px){
        width: 80%;
        font-size:  30px;
    }
`;

export const Button = styled.button`
    color: #FFF;
    background-color: #5454D4;
    border: none;
    padding: 15px 30px;
    border-radius: 5px;
    font-size: 1.2em;
    cursor: pointer;
    transition: all .2s ease-in-out;
    &:hover{
        background-color: #5e5eee;
        box-shadow: 0px 0px 24px 0px #5e5eee;
    }
    @media screen and (max-width: 1024px){
        padding: 10px 15px;
        font-size: 1.4em;
    }
    @media screen and (max-width: 425px){
        font-size: 1.1em;
    }
`;
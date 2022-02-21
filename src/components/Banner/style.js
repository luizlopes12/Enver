import styled from "styled-components";

export const Container = styled.section`
    width: 80%;
    position: relative;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FFF;
    @media(max-width: 768px){
        width: 90%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media(max-width: 375px){
        width: 90%;
    }
`;

export const Texts = styled.div`
    h1{
        margin: 50px 0 0 0;
        font-size: 4.5em;
        line-height: 65px;
    }
    p{
        margin-top: 30px;
        color: rgba(255,255,255, .7);
        font-weight: 300;
        line-height: 1.5em;
        font-size: 1.2em;
    }
    @media screen and (max-width: 1024px){
    h1{
        margin: 100px 0 0 0;
        font-size: 3em;
        line-height: 45px;
    }
    p{
        margin-top: 20px;
        color: rgba(255,255,255, .7);
        font-size: 1em;
    }
    }
    @media screen and (max-width: 768px){
        h1{
            width: 60%;
            font-size: 3em;
            line-height: 65px;
        }
        p{
            margin-top: 20px;
            font-size: .9em;
        }
    }
    @media screen and (max-width: 425px){
        h1{
            margin: 50px 0 0 0;
            width: 70%;
            font-size: 2.4em;
            line-height: 60px;
        }
        p{
            margin: 20px auto;
            font-size: .9em;
        }
    }
`;

export const Images = styled.div`
    width: 50%;
    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
        width: 100%;
    }
`;

export const Button = styled.button`
    background-color: #5454D4;
    border: none;
    margin-top: 50px;
    padding: 15px 30px;
    border-radius: 2px;
    font-size: 1.2em;
    cursor: pointer;
    transition: all .2s ease-in-out;
    &:hover{
        background-color: #5e5eee;
        box-shadow: 0px 0px 24px 0px #5e5eee;
    }
    a{
        text-decoration: none;
        color: #fff;
        img{
            height: 15px;
            margin-left: 10px;
        }
    }
    @media screen and (max-width: 1024px){
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 1em;
    }
    @media screen and (max-width: 425px){
        margin-top: 20px;
        
    }
`;
export const GuyImage = styled.img`
    transform: scale(1.1);
    width: 45vw;
    right: 0px;
    @media screen and (max-width: 768px){
        width: 90vw;
        margin: auto;
        transform: scale(1);
    }
    @media screen and (max-width: 425px){
        margin: 25px auto 80px;
        transform: scale(1.11);
    }
`;

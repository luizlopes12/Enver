import styled from "styled-components";

export const Container = styled.section`
    width: 85%;
    color: #fff;
    margin: 50px auto;
    padding-bottom: 20px;
    background-image: 
    url(${require('../../img/circle-icon.svg').default}),
    url(${require('../../img/line-icon.svg').default})
    ;
    background-repeat: no-repeat, no-repeat;
    background-position: right 40px, left bottom;
    background-size: 50px, 80px;
    @media screen and (max-width: 768px){
        width: 90%;
        background-size: 30px, 40px;
    }
`;
export const Title = styled.h3`
    font-size:  50px;
    width: 50%;
    text-align: start;
    @media screen and (max-width: 768px){
        width: 60%;
        font-size: 40px;
    }
    @media screen and (max-width: 425px){
        width: 80%;
        font-size:  30px;
    }
`;
export const Cards = styled.div`
    width: 100%;
    
`;

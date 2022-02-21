import styled from 'styled-components'


export const Container = styled.section`
    padding: 50px 0 60px;
    width: 85%;
    color: #FFF;
    margin: auto;
    background-image: 
    url(${require('../../img/play-icon.svg').default}), 
    url(${require('../../img/add-icon.svg').default}),
    url(${require('../../img/add-icon.svg').default})
    ;
    transition: all .3s ease-in-out;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-size: 80px, 40px, 40px;
    background-position: 15px 12px, 80vw 150px, left bottom;
    @media screen and (max-width: 768px){
        background-size: 40px, 20px, 20px;
        background-position: -10px 0, right 120px, left bottom;
    }

`;
export const Title = styled.h2`
    font-size:  50px;
    width: 50%;
    margin: auto;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size:  40px;
    }
    @media screen and (max-width: 425px){
        width: 100%;
        font-size:  30px;
    }
`;

export const Cards = styled.section`
    margin-top: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media screen and (max-width: 768px){
        margin-top: 80px;
        flex-direction: column;
    }
`;
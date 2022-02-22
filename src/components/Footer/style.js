import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
`;
export const Section = styled.section`
    width: 85%;
    padding: 50px 0 80px;
    margin: auto;
    @media screen and (max-width: 768px){
        width: 90%; 
    }
`;
export const List = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 768px){
        display: block;
    }
`;
export const Logo = styled.div`
    display: flex;
    align-items: center;
    span{
        color: #fff;
        font-size: 1.6em;
        margin: 0 5px;
        font-weight: 600;
        cursor: pointer;
    }
    @media screen and (max-width: 768px){
        justify-content: center;
    }
`;
export const Links = styled.ul`
    a{
        font-size: 1em;
        margin: 0 10px;
        text-decoration: none;
        color: rgba(255,255,255, .7);
        transition: all .2s ease-in-out;
        &:hover{
            color: #FFF;
        }
    }
    @media screen and (max-width: 768px){
        a{
            text-align: center;
            font-size: 1.2em;
            display: block;
            margin: 30px;
        }
    }
`;
export const Copy = styled.p`
    color: rgba(255,255,255, .7);
    font-size: .9em;
    text-align: center;
`;

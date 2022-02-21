import styled from 'styled-components'

export const Container = styled.section`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    @media screen and (max-width: 768px){
        width: 50%;
        margin: 20px auto;
    }
    @media screen and (max-width: 425px){
        width: 80%;
        margin: 10px auto;
    }
    @media screen and (max-width: 425px){
        width: 100%;
        margin: 20px auto;
    }
`;
export const CardImage = styled.img`
    height: 70px;
`;
export const CardTitle = styled.p`
    font-size: 1.6em;
    margin: 20px 0 15px;
    @media screen and (max-width: 425px){
        margin: 10px 0;
    }
    @media screen and (max-width: 425px){
        margin: 10px 0;
    }
`;
export const CardDesc = styled.p`
    text-align: center;
    color: rgba(255,255,255, .7);
    width: 80%;
    margin: auto;
    font-weight: 300;
    font-size: 1em;
`;
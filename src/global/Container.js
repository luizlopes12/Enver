import styled from 'styled-components';

export const Container = styled.section`
    height: 100px;
    width: 80%;
    margin: auto;
    color: #FFF;
    @media(max-width: 768px){
        width: 90%;
    }
    @media(max-width: 375px){
        width: 95%;
    }
`;
import styled from 'styled-components';

export const Container = styled.div`
    height: 100px;
    width: 80%;
    margin: auto;
    @media(max-width: 768px){
        width: 90%;
    }
    @media(max-width: 375px){
        width: 95%;
    }
`;
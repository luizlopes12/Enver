import styled from 'styled-components'

export const Container = styled.section`
    width: 85%;
    position: relative;
    margin: auto;
    margin: 100px 0;
    align-items: center;
    justify-content: space-between;
    color: #FFF;
    @media(max-width: 768px){
        width: 90%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
    }
    @media(max-width: 375px){
        width: 90%;
    }
`;
export const Texts = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2{
        font-size: 3.5em;
        line-height: 65px;
        width: 50%;
    }
    p{
        color: rgba(255,255,255, .7);
        font-weight: 300;
        line-height: 1.5em;
        font-size: 1.3em;
        width: 55%;
    }
    @media screen and (max-width: 1024px){
    h2{
        font-size: 3em;
        line-height: 45px;
    }
    p{
        color: rgba(255,255,255, .7);
        font-size: 1em;
    }
    }
    @media screen and (max-width: 768px){
        display: block;
        h2{
            width: 70%;
            margin: auto;
            font-size: 3em;
            line-height: 50px;
        }
        p{
            padding-top: 30px;
            width: 70%;
            margin: auto;
            font-size: 1em;
        }
    }
    @media screen and (max-width: 425px){
        margin-top: 50px;
        h2{
            width: 100%;
            font-size: 2.2em;
            line-height: 40px;
        }
        p{
            padding-top: 10px;
            width: 100%;
            font-size: .9em;
        }
    }
`;

export const Video = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    iframe{
        width: 100%;
        height: 85vh;
        border: none;
    }
    @media screen and (max-width: 768px){
    iframe{
        height: 62vh;
    }
    }
    @media screen and (max-width: 425px){
    iframe{
        height: 40vh;
        }
    }
    @media screen and (max-width: 375px){
    iframe{
        height: 35vh;
        }
    }
    @media screen and (max-width: 320px){
    iframe{
        height: 30vh;
        }
    }
`;
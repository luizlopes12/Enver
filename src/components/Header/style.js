import styled from "styled-components";

export const Navbar = styled.nav`
    margin-top: 30px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
        display: flex;
        align-items: center;
    }
    a{
        text-decoration: none;
        color: rgba(255, 255, 255, .7);
        margin: 0 20px;
        transition: all .2s ease-in-out;
        &:hover{
            color: #5454D4;
        }
    }
    span{
        font-size: 28px;
        margin-left: 8px;
        font-weight: bold;
    }
    button{
        background-color: transparent;
        color: #fff;
        padding: 10px 25px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 400;
        border: 1px solid rgba(255, 255, 255, .7);
        border-radius: 5px;
        transition: all .2s ease-in-out;
        &:hover{
            color: #333;
            background-color: #f7f7f7;
        }
    }
`;
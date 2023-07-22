import styled from "styled-components";

export const List = styled.ul`
    font-size: 18px;
    font-weight: 600;
    display: flex;
    gap: 20px;
    width: 22vw;
    height: 7vh;
    margin-right: 20px;
    text-decoration: none;
    align-items: flex-end;
    font-family: 'Noto Sans', sans-serif;
`;

export const Home = styled.a`
    color: orangered;
    /*color: #08d1d5;*/
    text-decoration: none;
    &:hover {
        font-size: 19px;
        transition-duration: 1s;
    }
`

export const An = styled.a`
    color: White;
    text-decoration: none;
    &:hover {
        font-size: 19px;
        transition-duration: 1s;
    }
`
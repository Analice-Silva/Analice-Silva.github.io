import styled from "styled-components";

export const Centro = styled.main`
   background-color: #f7f7f7;
   width: 100%;
   height: 90vh;
`;

export const Div = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
`

export const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    margin-top: 90px;
`

export const Img = styled.img`
    width: 550px;
    height: 585px;
`

export const YoureLogo = styled.img`
    width: 400px;
    margin-left: 15px;
`

export const DivYou = styled.div`
    font-family: 'Raleway', sans-serif;
`

export const SectionDivYou = styled.div`
    width: 430px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`

export const P = styled.p`
    font-size: 22px;
    line-height: 1.1em;
    color: black;
    font-weight: 500;
    font-family: 'Raleway', sans-serif;
`

export const Button = styled.button`
    background-color: orangered;
    width: 200px;
    height: 45px;
    margin-top: 10px;
    text-align: center;

    &:hover {
       cursor: pointer;
    }
`

export const Pink = styled.b`
   /*color: #f24caf;*/
   color: orangered;
   font-weight: bold;
`

export const SectionPhrase = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
    font-size: 20px;
`

export const Phrase = styled.section`
    width: 65%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Paragraph = styled.p`
    line-height: 1.7rem;
    width: 80%;
    font-size: 24px;
    text-align: center;
    margin: 15px;
    padding: 10px;
    font-family: 'Satisfy', cursive;
`

export const SectionProject = styled.section`
    background-size: initial;
    background-repeat: repeat;
    background-image: url(https://sherocksatcollege.com/wp-content/uploads/2017/07/pattern.png);
    width: 100%;
    height: 99vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SectionProjects = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ParagraphProject = styled.p`
    font-size: 26px;
    color: orangered;
    font-family: 'Satisfy', cursive;
`

export const Cards = styled.div`
    width: 370px;
    height: 550px;
    background-color: #f7f7f7;
    gap: 20px;
`

export const CardsProject = styled.div`
    display: flex;
    gap: 35px;
`

export const ButtonProjects = styled.button`
    background-color: orangered;
    margin-top: 35px;
    width: 8vw;
    height: 4vh;
    font-size: 20px;
    font-family: 'Satisfy', cursive;
    border-radius: 5px;
`

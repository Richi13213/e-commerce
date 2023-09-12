import styled from 'styled-components'

export const Button = styled.button`
    margin: 10px;
    padding: 12px;
    background-color: #7980c5;
    border-radius: 10px;
    text-align: center;
    font-family: system-ui;
    font-size: small;
    font-weight: 500;
`;


export const Card = styled.div `
    width: 280px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 0px 14px -2px #bebebe;
    transition: 0.2s ease-in-out;
    & hover{
        cursor: pointer;
    }
`;
    

export const Img = styled.img`
    width: 100%;
    height: 10em;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const H3 = styled.img`
    font-family: system-ui;
    font-size: medium;
    font-weight: 600;
    color: black;
    text-align: center;
`;

export const Paragraph = styled.img`
    font-family: system-ui;
    color: #999999;
    font-size: 13px;
    margin: 0px;
    text-align: center;
    padding: 5px;
`;

export const TextContainer = styled.img`
    padding: 7px 20px;
    display: flex;
    flex-direction: column;
    align-items: space-around;
`;

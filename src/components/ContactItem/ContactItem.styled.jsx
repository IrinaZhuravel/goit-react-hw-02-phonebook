import styled from 'styled-components';

export const Contact = styled.li`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ContactText = styled.p`
    margin-right: 20px;
`;

export const Button = styled.button`
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 3px;
    background-color: rgb(0, 204, 255);
    cursor: poiner;
    outline: none;
    transition: background-color 250ms linear;
        &:hover,
        &:focus {
            background-color: rgb(0, 162, 255);
        }

`;
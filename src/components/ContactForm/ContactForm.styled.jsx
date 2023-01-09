import styled from 'styled-components';

export const Form = styled.form`
    margin-bottom: 20px;
`;

export const Input = styled.input`
    display: block;
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 3px;
    border: 2px solid rgb(0, 204, 255);
    outline: none;
    transition: border-color 250ms linear;  
        &:hover,
        &:focus {
            border-color: rgb(0, 162, 255);
        }
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
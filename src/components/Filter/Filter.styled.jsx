import styled from 'styled-components';

export const FilterName = styled.p`
    margin-bottom: 10px;
`;

export const FilterInput = styled.input`
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
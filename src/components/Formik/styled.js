import styled from 'styled-components';

import Form from 'react-bootstrap/Form';

export const StyledInput = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid #000;
    padding: 5px;
    margin: 5px 0;
    /* &:hover {
        border-bottom: 1px solid #000;
    } */
    &:focus,
    :active {
        border-color: transparent;
        border-bottom: 2px solid #1c87c9;
    }
`;

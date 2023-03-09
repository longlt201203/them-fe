import styled from 'styled-components';

export const Wrap = styled.span`
    display: flex;
    justify-content: center;
    .btn-base {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 9px 12px;
        gap: 10px;
        background: #00bafd;
        border-radius: 42px;
        color: #ffffff;
        width: 133px;
    }
    .btn-newBase {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 9px 12px;
        gap: 10px;
        background: #007dff;
        border-radius: 42px;
        color: #ffffff;
        width: 133px;
    }
    .btn-inverted {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 9px 12px;
        gap: 10px;
        color: #007dff;
        background: #ffffff;
        border-radius: 42px;
        width: 133px;
    }
    .btn-outlined {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 9px 12px;
        gap: 10px;
        color: #007dff;
        border: 1px solid #00bafd;
        border-radius: 42px;
        width: 133px;
    }
`;

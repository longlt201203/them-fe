import styled from 'styled-components';

export const Wrapper = styled.div`
    .tesst {
        background: ${(props) => props.theme.colors.submenu};
    }
`;

export const Center = styled.div`
    display: flex;
    justify-content: center;
`;

export const BtnStyle = styled.div`
    .btn-flat-1 {
        background-color: #ffffe8;
        opacity: 0.8;
        color: #aacb73;
        border: #ffffe9;
    }
    .btn-flat-1:hover {
        background-color: #ffffe8;
        opacity: 1;
        color: #aacb73;
        transform: scale(1.025);
    }
    .btn-closes {
        background-color: #cde990;
        color: #ffffff;
    }
    .btn-closes:hover {
        background-color: rgba(205, 233, 144, 0.7);
        color: #ffffff;
        transform: scale(1.025);
    }
    .btn-save {
        background-color: #aacb73;
        color: #ffffff;
    }

    .btn-save:hover {
        background-color: rgba(170, 203, 115, 0.7);
        color: #ffffff;
        transform: scale(1.025);
    }
    .btn-xl {
        margin: 0.2em;
        padding: 0.2em;
        font-size: 2em;
    }
    .btn-xxl {
        margin: 0.2em;
        padding: 0.3em 0.8em;
        font-size: 1.2em;
    }
`;

export const AlertWidth = styled.div`
    margin: 2em;
    width: 40em;
`;

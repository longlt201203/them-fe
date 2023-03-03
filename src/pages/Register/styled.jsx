import styled from 'styled-components';

export const DivStyled = styled.div`
    padding: 10px;
    background-color: aqua;
`;
export const TitleStyled = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 59px;
    /* identical to box height */

    letter-spacing: 2px;

    /* Color template/Color text */

    color: #00bafd;

    text-shadow: 3px 2px 2px rgba(0, 0, 0, 0.25);
`;
export const SubtitleStyled = styled.div`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    /* identical to box height */

    text-align: center;

    /* Color template/Text */

    color: #ffffff;
`;
export const BackgroundTmp = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;

    padding: 30px;
    width: 100%;
    min-height: 100vh;
    background: ${({ url }) => (url ? `url(${url})` : null)};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

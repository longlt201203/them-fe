import styled from 'styled-components';

export const StyledHeader = styled.div`
    width: 100%;
    /* height: 64px; */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
    /* display: flex;
    justify-content: center; */
    box-sizing: border-box;
    /* padding: 0px 64px; */
    /* align-items: center; */
    background: transparent;
    transition: transform 0.5s ease-in-out;
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
    &.nav-bar--hidden {
        transition: all 0.5s;

        transform: translateY(-150%);
    }
    @media (max-width: 1440px) {
        /* padding: 8px; */
    }
    @media (max-width: 992px) {
        /* background: linear-gradient(
            152.97deg,
            rgba(21, 21, 21, 0.08) 0%,
            rgba(21, 21, 21, 0.09) 100%
        );
        height: 80px;

         */
        backdrop-filter: blur(10px);
    }
`;

import styled from 'styled-components';

export const ProfileStyle = styled.div`
    .bg-primary {
        background-color: ${(props) => props.theme.colors.primary};
    }
    .bg-secondary {
        background-color: ${(props) => props.theme.colors.secondary};
    }
    .bg-third {
        background-color: ${(props) => props.theme.colors.third};
    }
    .color-primary {
        color: ${(props) => props.theme.colors.color_primary};
    }
    .color-secondary {
        color: ${(props) => props.theme.colors.textColor};
    }
    .color-third {
        color: ${(props) => props.theme.colors.color_third};
    }
    .border-primary-1 {
        border-color: ${(props) => props.theme.colors.textColor};
    }
    .br-1 {
        border-radius: 1.5em;
    }
    .size-avatar {
        width: 70px;
        height: 70px;
    }
    .size-avatar-small {
        width: 60px;
        height: 60px;
    }
    .size-cover {
        width: 100%;
        height: 150px;
    }
    .top-13 {
        top: 130px;
    }
    .top-15 {
        top: 152px;
    }
    .pr-1 {
        margin-right: 1em;
    }
    .btn-hover:hover {
        background-color: ${(props) => props.theme.colors.primary};
        color: white;
        transition: 300ms all;
        transform: scale(1.05);
    }
    .fw-light-bold {
        font-weight: 600;
    }
    .post-img-size {
        width: 100%;
        height: 200px;
    }
    .mt-6 {
        margin-top: 3.5em;
    }
    .fs-7 {
        font-size: 0.95em;
    }
    .b-1 {
        bottom: 0.5em;
    }
    .r-1 {
        right: 1em;
    }
    .bi-hover:hover {
        transform: scale(1.07);
        transition: 300ms all;
    }
    .left-1 {
        left: 0.5em;
    }
    .bg-unset {
        background: unset;
    }
    .opacity-4 {
        opacity: 0.3;
    }
    .navbar {
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(20px) saturate(160%) contrast(45%) brightness(140%);
        -webkit-backdrop-filter: blur(20px) saturate(160%) contrast(45%) brightness(140%);
    }
    .btn-like {
        color: ${(props) => props.theme.colors.red};
    }
    .btn-dislike {
        color: ${(props) => props.theme.colors.dark};
    }
    .border-dashed {
        border: 1px ${(props) => props.theme.colors.grey} dashed;
    }
    .bd {
        border-color: ${(props) => props.theme.colors.red};
    }
    .color-grey {
        color: ${(props) => props.theme.colors.grey};
    }
`;

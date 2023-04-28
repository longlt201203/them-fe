import { Form } from 'react-router-dom';
import styled from 'styled-components';

export const BackgroundUser = styled.div`
    padding: 70px;
    background: ${({ url }) => (url ? `url(${url})` : null)};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;
export const FormContainer = styled(Form)`
    padding: 20px;
`;
export const ImageUpload = styled.button`
    position: absolute;
    top: 0.7rem;
    width: 40px;
    left: 55%;
    height: 40px;
    border: 2px dashed #d9d9d9;
    cursor: pointer;
    border-radius: 50px;
    :hover {
        border: 2px dashed #45ce7c;
    }
`;
export const CoverUpload = styled(ImageUpload)`
    border-radius: 10px;
    width: 40px;
    height: 40px;
`;
export const AvaUnknown = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: #fff;
    border: 2px dashed #d9d9d9;
    cursor: pointer;
    border-radius: 50px;
`;
export const ALignAvatar = styled.div`
    position: relative;
    top: 70px;
`;
export const ALignButtonEdit = styled.span`
    position: relative;
    top: 15px;
    left: 263px;
`;
export const WrapperEditAccount = styled.div`
    @media all and (min-width: 500px) {
        max-width: 500px;
    }
`;

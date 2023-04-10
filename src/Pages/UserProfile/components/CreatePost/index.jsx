import React from 'react';

import ButtonStyled from '../../../../components/Button';
import GoBack from '../Header/GoBack';

const CreatePost = () => {
    return (
        <div>
            <GoBack />
            <h2>Create Post</h2>
            <ButtonStyled className="border-primary-1">Post</ButtonStyled>
        </div>
    );
};

export default CreatePost;

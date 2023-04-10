import React from 'react';

import { Col } from 'react-bootstrap';

import AddBtn from './components/AddBtn';
import Header from './components/Header/Header';
import LineBreak from './components/LineBreak';
import Post from './components/Post/Post';
import Tracking from './components/Tracking/Tracking';
import { ProfileStyle } from './style';

const UserProfile = () => {
    return (
        <ProfileStyle>
            <Col>
                <Header />
                <Tracking />
                <LineBreak />
                <Post />
                <AddBtn href="/create-post" />
            </Col>
        </ProfileStyle>
    );
};

export default UserProfile;

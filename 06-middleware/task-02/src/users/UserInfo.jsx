import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isFetchingSelector, userDataSelector } from './users.selectors';
import Spinner from './Spinner';

const UserInfo = ({ userData, isFetching }) => {
    if (isFetching) {
        return <Spinner />;
    }

    if (!userData) {
        return null;
    }

    return (
        <div className="user">
            <img alt="User Avatar" src={userData.avatar_url} className="user__avatar" />
            <div className="user__info">
                <span className="user__name">{userData.name}</span>
                <span className="user__location">{userData.location}</span>
            </div>
        </div>
    );
};

export default userInfo;

/*
UserInfo.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    userData: PropTypes.shape(),
};

UserInfo.dafaultValue = {
    userData: null,
};

const mapState = state => {
    return {
        isFetching: isFetchingSelector(state),
        userData: userDataSelector(state)
    };
};

export default connect(mapState)(UserInfo);*/

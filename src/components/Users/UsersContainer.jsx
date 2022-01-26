import React from 'react';
import { connect } from 'react-redux';
import {
  followActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
} from '../redux/users-reducer';
import Users from './Users';
// import mapStateToProps from 'react-redux/es/connect/mapStateToProps';
// import mapDispatchToProps from 'react-redux/es/connect/mapDispatchToProps';

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followActionCreator(userId));
    },

    unfollow: userId => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: users => {
      dispatch(setUsersActionCreator(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);

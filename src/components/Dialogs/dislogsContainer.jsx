import React from 'react';
import Dialogs from './Dialogs';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../redux/dialogs-reducer';

import { connect } from 'react-redux';

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToPtops = dispatch => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: body => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToPtops)(Dialogs);
export default DialogsContainer;

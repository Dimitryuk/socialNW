const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  messages: [
    { message: 'Hello', id: 1 },
    { message: 'How are you', id: 2 },
    { message: 'Im fine', id: 3 },
    { message: 'Yo', id: 4 },
    { message: 'Yo', id: 5 },
  ],
  dialogs: [
    { name: 'Dima', id: 1 },
    { name: 'Anfrey', id: 2 },
    { name: 'Sveta', id: 3 },
    { name: 'Sasha', id: 4 },
    { name: 'Viktor', id: 5 },
    { name: 'Valera', id: 6 },
  ],
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({ message: body, id: 6 });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = body => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export default dialogsReducer;

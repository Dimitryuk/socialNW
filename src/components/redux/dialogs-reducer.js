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
  let stateCopy = {
    ...state,
    messages: [...state.messages],
  };

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return { ...state, newMessageBody: action.body };
    }
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body }],
      };

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

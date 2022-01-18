import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { message: 'Hi.how are you?', id: 1, likesCount: 18 },
        { message: 'Its my first post', id: 2, likesCount: 15 },
        { message: 'Its my second post', id: 3, likesCount: 3 },
      ],
      newPostText: 'it-kamasutra',
    },
    dialogsPage: {
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
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state changed');
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;

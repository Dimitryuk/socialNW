const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { message: 'Hi.how are you?', id: 1, likesCount: 18 },
    { message: 'Its my first post', id: 2, likesCount: 15 },
    { message: 'Its my second post', id: 3, likesCount: 3 },
  ],
  newPostText: 'it-kamasutra',
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      {
        let newPost = {
          id: 4,
          //   message: this._state.profilePage.newPostText,
          message: state.newPostText,
          likesCount: 0,
        };
        state.posts.push(newPost);
        state.newPostText = '';
      }
      return state;
    case UPDATE_NEW_POST_TEXT:
      {
        state.newPostText = action.newText;
      }
      return state;
    default: {
      return state;
    }
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = text => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
export default profileReducer;

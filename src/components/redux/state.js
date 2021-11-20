let store={
  _state:{
    profilePage: {
       posts:[
    {message: 'Hi.how are you?', id:1, likesCount :18},
        { message: 'Its my first post', id: 2, likesCount: 15 },
    {message: 'Its my second post', id:3, likesCount : 3},
   
      ],
      newPostText:"it-kamasutra"
         
    },
    dialogsPage: {
         messages:[
    {message: 'Hello', id:1},
    {message: 'How are you', id:2},
    {message: 'Im fine', id:3},
    {message: 'Yo', id:4},
    {message: 'Yo', id:5},
      ],
       dialogs:[
    {name: 'Dima', id:1},
    {name: 'Anfrey', id:2},
    {name: 'Sveta', id:3},
    {name: 'Sasha', id:4},
    {name: 'Viktor', id:5},
    {name: 'Valera', id:6},
    
  ]
    }
  
  },
  getState(){
   
    return this._state
  },
  _callSubscriber (){
    console.log('state changed')
  },
  
  subscribe (observer){
    this._callSubscriber=observer
  },
  
  dispatch(action){
    
    if (action.type === "ADD-POST"){
      let newPost = {
        id:4,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText=''
      this._callSubscriber(this._state)
    
    } else if(action.type === "UPDATE-NEW-POST-TEXT"){
      this._state.profilePage.newPostText=action.newText
      this._callSubscriber(this._state)
    }

  }

}


export default store
window.store=store








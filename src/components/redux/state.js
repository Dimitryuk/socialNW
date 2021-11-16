import { rerenderEntireTree } from "../../render";


let state = {
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

}
window.state=state


export let addPost = (postMessage)=>{
  let newPost = {
    id:4,
    message: postMessage,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost)
  rerenderEntireTree(state)

}

export let updateNewPostText = (newText)=>{

  state.profilePage.newPostText=newText
  rerenderEntireTree(state)

}


export default state

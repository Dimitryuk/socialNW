import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const posts =[
  {message: 'Hi.how are you?', id:1, likesCount :18},
  {message: 'Its my first post', id:2, likesCount : 15},
 
]

const dialogsData = [
  {name: 'Dima', id:1},
  {name: 'Anfrey', id:2},
  {name: 'Sveta', id:3},
  {name: 'Sasha', id:4},
  {name: 'Viktor', id:5},
  {name: 'Valera', id:6},
  
]
const messagesData =[
  {message: 'Hello', id:1},
  {message: 'How are you', id:2},
  {message: 'Im fine', id:3},
  {message: 'Yo', id:4},
  {message: 'Yo', id:5},
]

ReactDOM.render(
  <React.StrictMode>
    <App  posts={posts} messagesData={messagesData} dialogsData={dialogsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from '../../redux/state';

const MyPosts = props => {
  //   const posts =[
  //     {message: 'Hi.how are you?', id:1, likesCount :18},
  //     {message: 'Its my first post', id:2, likesCount : 15},

  // ]

  let postsElements = props.posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  console.log(props);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
    // console.log(props);
  };
  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>

      <div>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
